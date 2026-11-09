export interface Employee {
    id : string;
    name : string;
    email : string;
    address? : string; // property address bersifat optional, sehingga tidak wajib diisi
}

// extends digunakan untuk mewarisi/melanjutkan interface Employee, sehingga interface Manager memiliki semua property yang ada pada interface Employee
export interface Manager extends Employee {
    numberOfEmployees : number; // property numberOfEmployees hanya ada pada interface Manager, sehingga tidak bisa diakses pada interface Employee
}

export interface Person {
    name : string;
    sayHello(name: string) : string; // method sayHello memiliki parameter name bertipe data string dan mengembalikan nilai bertipe data string
}
