export interface Donor {
  id: string
  name: string
  amount: string
  sector?: string
  region?: string
}

export const TOP_DONORS: Donor[] = [
  { id: '1', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
  { id: '2', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
  { id: '3', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
  { id: '4', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
  { id: '5', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
  { id: '6', name: "O'zR Davlat byudjeti", amount: '225 006 327 253 921,22' },
]

export interface BarChartItem {
  region: string
  optik: number
  mobil: number
  noInternet: number
}

export const INTERNET_DATA: BarChartItem[] = [
  { region: 'Xorazm',      optik: 900,  mobil: 150, noInternet: 50 },
  { region: 'Toshkent v',  optik: 1050, mobil: 180, noInternet: 70 },
  { region: 'Toshkent sh', optik: 550,  mobil: 90,  noInternet: 30 },
  { region: 'Surxondaryo', optik: 850,  mobil: 130, noInternet: 60 },
  { region: 'Sirdaryo',    optik: 480,  mobil: 80,  noInternet: 25 },
  { region: 'Samarqand',   optik: 780,  mobil: 120, noInternet: 45 },
  { region: 'Qoraqalp.',   optik: 680,  mobil: 100, noInternet: 55 },
  { region: 'Qashqadaryo', optik: 720,  mobil: 110, noInternet: 40 },
  { region: 'Navoiy',      optik: 540,  mobil: 85,  noInternet: 35 },
  { region: 'Namangan',    optik: 820,  mobil: 125, noInternet: 48 },
  { region: "Jizzax",      optik: 610,  mobil: 95,  noInternet: 38 },
  { region: "Farg'ona",    optik: 880,  mobil: 140, noInternet: 52 },
  { region: 'Buxoro',      optik: 490,  mobil: 78,  noInternet: 32 },
  { region: 'Andijon',     optik: 310,  mobil: 55,  noInternet: 20 },
]
