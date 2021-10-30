'use strict';

/**
 * @class
 * @description - 計算クラス
 */
export class Calculator {

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xとyを足した数字
     */
    public sum(x: number, y: number) {
        return x + y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xからyを引いた数字
     */
    public subtract(x: number, y: number) {
        return x - y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xとyを掛けた数字
     */
    public multiply(x: number, y: number) {
        return x * y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xからyを割った数字
     */
    public divide(x: number, y: number) {
        return x / y;
    }
}
