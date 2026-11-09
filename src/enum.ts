export enum CustomerType {
    REGULAR = 'REGULAR', 
    PREMIUM = 'PREMIUM',
    VIP = 'VIP'
}

export type Customer = {
    id : number;
    name : string;
    type : CustomerType; // implementasi enum CustomerType pada property type, sehingga property type hanya bisa menggunakan nilai dari enum CustomerType
}