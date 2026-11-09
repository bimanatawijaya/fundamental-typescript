# Belajar TypeScript Dasar

Repository latihan TypeScript dasar: tipe data, interface, type alias, enum, function, object, array, union, `any`, type assertions, percabangan, dan perulangan.

## Prasyarat

- [Node.js](https://nodejs.org/) 20 atau lebih baru
- npm (sudah termasuk dalam instalasi Node.js)

## Instalasi

```bash
npm install
```

## Menjalankan Test

Semua materi dikemas sebagai unit test menggunakan Jest dan Babel.

```bash
npm test
```

Mode watch (test dijalankan ulang setiap file berubah):

```bash
npm test -- --watch
```

## Build ke Folder `dist`

Kode TypeScript di `src/` dikompilasi menjadi JavaScript di `dist/`:

```bash
npm run build
```

Hasil build:

- `dist/src/*.js` — JavaScript hasil kompilasi
- `dist/src/*.d.ts` — deklarasi tipe
- `dist/src/*.js.map` dan `dist/src/*.d.ts.map` — source map

Mode watch saat sedang mengembangkan:

```bash
npm run build:watch
```

`dist/` dan `node_modules/` sudah masuk `.gitignore`, jadi tidak ikut di-commit. Setelah clone repository, cukup jalankan `npm install` lalu `npm run build` untuk membuat ulang folder `dist`.

## Cek Tipe Seluruh Project

Memeriksa error TypeScript di `src/` dan `tests/` tanpa menghasilkan file:

```bash
npm run typecheck
```

## Struktur Project

```text
.
├── src/                  # Kode TypeScript materi latihan
├── tests/                # Unit test Jest
├── dist/                 # Hasil build (dibuat oleh npm run build, tidak di-commit)
├── babel.config.json     # Konfigurasi Babel untuk Jest
├── tsconfig.json         # Konfigurasi TypeScript (typecheck src + tests)
├── tsconfig.build.json   # Konfigurasi build (khusus src, output ke dist)
└── package.json
```

## Perintah Ringkas

| Perintah | Fungsi |
| --- | --- |
| `npm install` | Memasang dependency |
| `npm test` | Menjalankan semua test |
| `npm run build` | Build `src/` ke `dist/` |
| `npm run build:watch` | Build otomatis saat file berubah |
| `npm run typecheck` | Cek tipe seluruh project tanpa emit |
