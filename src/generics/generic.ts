interface Person {
    name: string;
    age: number;
}

function func<T>(p: T): T {
    return p;
}

export const person = func<Person>({name: 'Jake', age: 12})
