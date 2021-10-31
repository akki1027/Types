'use strict';

import * as _ from 'underscore';


{
    /************************************************************************/
    // 関数

    const printId = (id: number | string) => {
        if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
        } else {
            // Here, id is of type 'number'
            console.log(id);
        }
    };
    // printId(1);
    // printId('id');


    /************************************************************************/
    //interface

    interface User {
        id: number;
        name: string;
    };

    const user: User = {
        id: 1,
        name: 'yamada'
    };
    // console.log(user);


    /************************************************************************/
    // class

    class UserAccount {
        id: number;
        name: string;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    const userTwo: User = new UserAccount(2, "aki");
    // console.log(userTwo);


    /************************************************************************/
    // オリジナルの型の定義

    type MyBool = true | false;
    type WindowStates = "open" | "closed" | "minimized";
    type LockStates = "locked" | "unlocked";
    type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

    const hasMoney: MyBool = true;
    // console.log(hasMoney);

    /************************************************************************/
    // Generics

    type StringArray = Array<string>;
    type NumberArray = Array<number>;
    type ObjectWithNameArray = Array<{ name: string }>;


    /************************************************************************/
    //DOM 操作

    // const root: HTMLElement = document.getElementById('root')!;
    // or
    const root: HTMLElement = <HTMLInputElement>document.getElementById('root')!;
    root.style.color = 'red';

    const a = document.createElement('a');
    a.href = "#";
    a.textContent = 'ボタンです';
    root.append(a);


    /************************************************************************/
    // practice

    const printName = (obj: { first: string; last?: string }): void => {
        console.log(obj);
    }
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" });

    const shaffled: number[] = _.shuffle([1, 2, 3, 4, 5]);
    console.log(shaffled);

    interface Test {
        name: string;
        score: number;
    };

    const test: Test = {
        name: 'math',
        score: 100,
    };


    // keys キーを全て取得
    console.log(_.keys(test));


    // values バリューを全て取得
    console.log(_.values(test));


    // invert キーとバリューを入れ替える
    console.log(_.invert(test));


    // keyが含まれているかどうかを真偽値で返す
    console.log(_.has(test, 'name'));
}
