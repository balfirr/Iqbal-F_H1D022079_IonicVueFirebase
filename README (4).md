
# Cara Kerja Login Ionic dengan Vue + Firebase
1. [Gambar 1 dan 2] Pengguna memasukkan email dan password, atau dalam praktikum ini, pengguna akan diminta untuk login dengan menggunakan akun Google. Ketika tombol Sign In diklik maka pengguna akan diarahkan ke halaman untuk memilih akun Google yang sedang dipakai untuk nantinya digunakan untuk login. Kemudian sistem akan mengautentikasi kredensial pengguna melalui Firebase. Setelah data lolos validasi, aplikasi akan memanggil fungsi dari Firebase Authentication API menggunakan Firebase SDK. Firebase akan memeriksa data login (email dan password dari akun Google) dengan data yang tersimpan di database Firebase Authentication.
2. [Gambar 3 dan 4] Jika berhasil, pengguna kemudian akan diarahkan ke halaman utama. Kemudian jika tombol Profile diklik, maka informasi mengenai nama dan email pengguna juga akan ditampilkan disini, karena setelah pengguna berhasil login, aplikasi Ionic dapat menyimpan informasi pengguna secara lokal hingga pengguna melakukan sign out.
## Screenshots
![App Screenshot](https://github.com/balfirr/Iqbal-F_H1D022079_IonicVueFirebase/blob/894fa90e51e8251da53ec95df72abf28ee4dd5d1/Screenshot%202024-11-14%20100357.png)

![App Screenshot](https://github.com/balfirr/Iqbal-F_H1D022079_IonicVueFirebase/blob/894fa90e51e8251da53ec95df72abf28ee4dd5d1/Screenshot%202024-11-14%20100419.png)

![App Screenshot](https://github.com/balfirr/Iqbal-F_H1D022079_IonicVueFirebase/blob/894fa90e51e8251da53ec95df72abf28ee4dd5d1/Screenshot%202024-11-14%20100451.png)

![App Screenshot](https://github.com/balfirr/Iqbal-F_H1D022079_IonicVueFirebase/blob/894fa90e51e8251da53ec95df72abf28ee4dd5d1/Screenshot%202024-11-14%20100505.png)
