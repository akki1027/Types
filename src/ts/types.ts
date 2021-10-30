'use strict';

{
    // オリジナルの型の定義
    type MyBool = true | false;
    type WindowStates = "open" | "closed" | "minimized";
    type LockStates = "locked" | "unlocked";
    type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

    const hasMoney: MyBool = true;
    console.log(hasMoney);

    const root: HTMLElement | null = document.getElementById("root");

    // interface
    interface User {
        id: number;
        name: string;
    };

    const user: User = {
        id: 1,
        name: 'yamada'
    };

    console.log(user);

    const printId = (id: number | string) => {
        if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
        } else {
            // Here, id is of type 'number'
            console.log(id);
        }
    };

    printId(1);
}
