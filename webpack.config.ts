import * as path from 'path';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as glob from 'glob';


// src/ts/以下のtsファイル全て
const entries = glob.sync("./src/ts/*.ts").map(path => [path.replace('./src/ts/', '').replace('.ts', ''), path]);
const entryObj = Object.fromEntries(entries);

const config: webpack.Configuration = {
    mode: 'development',  // 'production',
    entry: entryObj,
    output: {
        // 出力ファイル名
        filename: '[name].bundle.js',
        // 出力ファイルを置くディレクトリ
        path: path.resolve(__dirname, 'public/js'),
    },
    resolve: {
        // import文でファイルの拡張子を書かずに名前解決をする
        extensions: ['.tsx', '.ts', '.js'],
        // 以下のプラグインを追加することでtsconfig.jsonに記述されたpathsセクションを使用することができる（エイリアスでのモジュール解決が可能になる）
        // 例えば以下のプラグイン無しでは、tsconfig.jsonのbaseUrlが適応されないので、Module not found: Error: Can't resolve '~' in '~'となる
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    module: {
        rules: [
            {
                // 拡張子
                test: /\.tsx?$/,
                // babelを通さないディレクトリ
                exclude: /node_modules/,
                // Babel を利用する
                use: 'ts-loader',
            },
        ],
    }
};


export default config;
