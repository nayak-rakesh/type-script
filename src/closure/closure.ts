export default function outerFunc(outerArg: string) {
    function innerFunc(): string {
        const data: string = outerArg;
        return data;
    }
    return innerFunc;
}

// const func = outerFunc('outer arg');
// console.log(func());