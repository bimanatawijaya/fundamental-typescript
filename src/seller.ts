export interface Seller {
    id: number;
    name: string;
    email: string;
    address?: string; // property address bersifat optional, sehingga tidak wajib diisi
}

export interface SellerWithReadonly {
    readonly id: number; // property id bersifat readonly, sehingga tidak bisa diubah nilainya setelah diinisialisasi
    name: string;
    email: string;
    address?: string; // property address bersifat optional, sehingga tidak wajib diisi
    readonly nib : string; // property nib bersifat readonly, sehingga tidak bisa diubah nilainya setelah diinisialisasi
    readonly npwp : string; // property npwp bersifat readonly, sehingga tidak bisa diubah nilainya setelah diinisialisasi
}

export interface StringDictionary {
    [key: string]: string
}