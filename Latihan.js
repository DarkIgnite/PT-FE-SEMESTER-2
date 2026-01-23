/// 1
let uang = 67000;

if (uang >= 50000) {
  console.log('Saldo mencukupi');
}

/// 2

let passwordInput = 77653;
let passwordBenar = 77653;

if (passwordInput === passwordBenar) {
  console.log('Akses diterima');
} else {
  console.log('Password salah');
}

/// 3

let saldoNasabah = 2500000;

if (saldoNasabah >= 10000000) {
  console.log('Nasabah Prioritas');
} else if (saldoNasabah >= 1000000) {
  console.log('Nasabah Reguler');
} else {
  console.log('Nasabah Basic');
}
