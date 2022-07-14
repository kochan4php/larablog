<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="550"></a></p>

## Teknologi yang digunakan

- [PHP](https://php.net) : Version 8.1.2
- [Laravel](https://laravel.com) : Version 9.19.0
- [Tailwind CSS](https://tailwindcss.com) : Version 3.1.0
- [React.js](https://reactjs.org) : Version 17.0.2
- [Inertia.js](https://inertiajs.com) : Version 1.4.2

## Cara Instalasi

- Clone repository [https://github.com/kochan4php/larablog.git](https://github.com/kochan4php/larablog)
- Masuk ke folder **larablog** dan jalankan perintah **composer install** serta **npm install**
- Pada root folder **larablog** buat sebuah file dengan nama **.env** dan copy isi file dari **.env.example** ke dalam file **.env**
- Sesuaikan pengaturan koneksi database pada file **.env** (Key yang harus disesuaikan DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
- Pada terminal jalankan perintah **php artisan migrate --seed** untuk melakukan migrasi tabel yang diperlukan ke database sekaligus untuk generate data dummy
- Pada terminal jalankan **php artisan serve**
- Buka terminal kedua kemudian jalankan **npm run dev** atau **yarn dev**
- Aplikasi Laravel bisa diakses menggunakan url [http://localhost:8000](http://localhost:8000)

## Semoga kalian suka :D
<p align="center">
<img src="https://user-images.githubusercontent.com/69864986/179020715-d4d9fa7a-6ee9-48fe-a388-5185b96ae909.gif">
</p>
