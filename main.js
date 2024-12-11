//Array -> Massivlar
let fruits = [`olma`, `nok`, `shaftoli`, [1, 2], true, 5];
console.log(fruits[2]);
fruits[2] = `turip`;
console.log(fruits[2]);
//ichida nechta malumot borligi
console.log(fruits.length);
//malumot qo'shish
fruits.push(`qulupnay`);
console.log(fruits);
//malumot olib tashlash
fruits.pop();
fruits.pop();
console.log(fruits);
//malumotni oldinga o'tkazib qo'yish
fruits.unshift(`nok`);
console.log(fruits);
//boshidagi malumotni olib tashlaydi
fruits.shift(`olma`);
//siklda aylantirish
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Boshlang‘ich darajadagi masalalar
// Berilgan massivdagi barcha elementlarni konsolga chiqaring.
let arr = [4, 12, 45, 5, 6, 10];
console.log(arr);
// Massiv elementlarining yig‘indisini hisoblang.
let arr2 = [4, 12, 45, 5, 6, 10];
sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log(sum);
// Massivdagi eng katta elementni toping.
let arr3 = [4, 12, 45, 5, 6, 10];
let max = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (max < arr3[i]) {
    max = arr3[i];
  }
}
console.log(max);

// Massivdagi eng kichik elementni toping.
let arr4 = [4, 12, 45, 5, 6, 10];
let min = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (min > arr4[i]) {
    min = arr4[i];
  }
}
console.log(min);

// Massivdagi barcha juft sonlarni konsolga chiqaring.
let arr5 = [4, 12, 45, 5, 6, 10];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 == 0) {
    console.log(arr5[i]);
  }
}

// Massivdagi barcha toq sonlarni konsolga chiqaring.
let arr6 = [4, 12, 45, 5, 6, 10];
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 == 1) {
    console.log(arr6[i]);
  }
}

// Massivdagi manfiy sonlar sonini hisoblang.
let arr7 = [4, 12, 45, 5, 6, 10];
let count = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] < 0) {
    count++;
  }
}
console.log(count);

// Massivdagi musbat sonlar sonini hisoblang.
let arr8 = [4, 12, 45, 5, 6, 10];
let count2 = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > 0) {
    count2++;
  }
}
console.log(count2);

// Massivdagi elementlarning o‘rtacha qiymatini toping.
let arr9 = [4, 12, 45, 5, 6, 10];
let count3 = 0;
for (let i = 0; i < arr9.length; i++) {
  count3 += arr9[i];
}
let average = count3 / arr9.length;
console.log(average);

// Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).
const arr11 = [4, 12, 45, 5, 6, 10];
const $reverse = [];
for (let i = arr11.length - 1; i >= 0; i--) {
  $reverse.push(arr11[i]);
}
console.log($reverse);
// Massivning teskari nusxasini yarating.
console.log(arr11.reverse());
// Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.
const arr12 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
const arr13 = [];
for (let i = 0; i < arr12.length; i++) {
  arr13.push(arr12[i] * 2);
}
console.log(arr13);

// Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.
const arr14 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
let sum = 0;
for (let i = 0; i < arr14.length; i++) {
  if (arr14[i] == 0) {
    sum++;
  }
}
console.log(sum);

// Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.
const arr15 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
for (let i = 0; i < arr15.length; i++) {
  if (arr15[i] % 5 == 0) {
    console.log(arr15[i]);
  }
}

// 15.Massivni tartiblang (o‘sish bo‘yicha)
const arr16 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
console.log(arr16.sort((a, b) => a - b));

// 16.Massivni tartiblang (kamayish bo‘yicha)
const arr17 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
console.log(arr17.sort((a, b) => b - a));

// Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.
const arr18 = [4, 0, 12, 45, 0, 5, 0, 6, 10];
const arr19 = [];
for (let i = 0; i < arr18.length; i++) {
  arr19.push(arr18[i] + 3);
}
console.log(arr19);

// Massivdagi barcha musbat sonlarni alohida massivga ajrating.
const arr20 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
const arr21 = [];
for (let i = 0; i < arr20.length; i++) {
  if (arr20[i] > 0) {
    arr21.push(arr20[i]);
  }
}
console.log(arr21);

// Massivdagi barcha manfiy sonlarni alohida massivga ajrating.
const arr22 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
const arr23 = [];
for (let i = 0; i < arr22.length; i++) {
  if (arr22[i] < 0) {
    arr23.push(arr22[i]);
  }
}
console.log(arr23);

// Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.
const arr24 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
for (let i = 1; i < arr24.length; i += 2) {
  console.log(arr24[i]);
}

// O‘rta darajadagi masalalar
// 21.Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating
const arr25 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
const dig26 = Math.floor(arr25.length / 2);
const firstSlice = arr25.slice(0, dig26);
const secondSlice = arr25.slice(dig26);
console.log(`Birinchi yarmi:${firstSlice}`);
console.log(`Ikkinchi yarmi:${secondSlice}`);

// Massivda nechta element 10 dan katta ekanini aniqlang.
const arr26 = [4, 0, 12, -4, 45, 888, 0, 5, 777, 0, 6, -21, 10];
let count4 = 0;
for (let i = 0; i < arr26.length; i++) {
  if (arr26[i] > 10) {
    count4++;
  }
}
console.log(count4);

// Massivdagi barcha elementlarni 0 ga almashtiring.
const arr27 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];

for (let i = 0; i < arr27.length; i++) {
  arr27[i] = 0;
}
console.log(arr27);

// Massivning birinchi elementini oxiriga o‘tkazing.
const arr28 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
arr28.push(arr28.shift());
console.log(arr28);

// Massivning oxirgi elementini boshiga o‘tkazing.
const arr29 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
arr29.unshift(arr29.pop());
console.log(arr29);

// Massivdan har ikkinchi elementni o‘chiring.
const arr30 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
for (let i = 1; i < arr30.length; i++) {
  arr30.splice(i, 1);
  i--;
}
console.log(arr30);

// Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.
const arr31 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
for (let i = 0; i < arr31.length; i++) {
  if (arr31[i] < 0) {
    arr31[i] = 0;
  }
}
console.log(arr31);

// Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.
let arr32 = [4, 12, 45, 5, 6, 10];
let result = [];

for (let i = 0; i < arr32.length; i++) {
  result.push(arr32[i] * i);
}

console.log(result);

// Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.
let arr33 = [4, 0, 12, -4, 45, 0, 5, 0, 6, -21, 10];
for (let i = arr33.length - 1; i >= 0; i--) {
  if (arr33[i] % 3 !== 0) {
    arr33.splice(i, 1);
  }
}
console.log(arr33);

//30. Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak)----
let res1 = [];
let arr34 = [1, 2, 3, 4, 5, , 5, 6, 7, 7, 8, 9, 9];

function isExist(res1, item) {
  for (let i = 0; i < res1.length; i++) {
    if (item == res1[i]) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < arr34.length; i++) {
  if (!isExist(res1, arr34[i])) {
    res1.push(arr34[i]);
  }
}
console.log(res1);
3;

// Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.
const arr35 = [4, 0, 12, -4, 45, 888, 0, 5, 777, 0, 6, -21, 10];
const arr36 = [];
for (let i = 0; i < arr35.length; i += 2) {
  arr36.push(arr35[i]);
}
console.log(arr36);

// Massivdan 2 ga karrali sonlarni olib tashlang.
const arr37 = [4, 0, 12, -4, 45, 888, 0, 5, 777, 0, 6, -21, 10];
for (let i = arr37.length - 1; i >= 0; i--) {
  if (arr37[i] % 2 === 0) {
    arr37.splice(i, 1);
  }
}
console.log(arr37);

//33. Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
let arr39 = [4, 0, 12, -4, 45, 888, 0, 5, 777];
if (arr39.length % 2 == 0) {
  let midStart = arr39.length / 2 - 1;
  arr39.splice(midStart, 2);
} else {
  let midIndex = Math.floor(arr39.length / 2);
  arr39.splice(midIndex, 1);
}
console.log(arr39);

// Massivning birinchi va oxirgi elementlarini almashtiring.
let arr40 = [4, 0, 12, -4, 45, 888, 0, 5, 777];

if (arr40.length > 1) {
  let temp = arr40[0];
  arr40[0] = arr40[arr40.length - 1];
  arr40[arr40.length - 1] = temp;
}
console.log(arr40);

//35. Massivni boshqa massiv bilan birlashtiring.
let arr41 = [4, 0, 12, -4, 45, 888, 0, 5, 777];
let arr42 = [4, 0, 12, -4, 45, 888, 0, 5, 777];
let arr43 = arr41.concat(arr42);
console.log(arr43);

// Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.
let arr44 = [4, 0, 12, -4, 45, 888, 0, 5, 777];
let arr46 = [];
for (let i = 0; i < arr44.length; i++) {
  arr46.push(arr44[i] / 3);
}
console.log(arr46);

// Massivdan manfiy sonlarni olib tashlang.
let arr47 = [4, -753, 0, 12, -4, 45, 888, 0, -79, 5, 777, -9];
for (let i = 0; i < arr47.length; i++) {
  if (arr47[i] < 0) {
    arr47.splice(i, 1);
    i--;
  }
}
console.log(arr47);

// Massivdagi juft indeksdagi elementlarni 0 ga almashtiring
let arr48 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
for (let i = 0; i < arr48.length; i += 2) {
  arr48[i] = 0;
}
console.log(arr48);

// 39.Massivdan takroriy elementlarni olib tashlang.
let arr49 = [1, 2, 3, 4, 5, , 5, 6, 7, 7, 8, 9, 9];
let res = [];
function isExist(res, item) {
  for (let i = 0; i < res.length; i++) {
    if (item == res[i]) {
      return true;
    }
  }
  return false;
}
for (let i = 0; i < arr49.length; i++) {
  if (!isExist(res, arr49[i])) {
    res.push(arr49[i]);
  }
}
console.log(res);

// Massivning o‘rta indeksiga yangi element qo‘shing.
let arr51 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let $midIndex = Math.floor(arr51.length / 2);
let newElement = 4;
arr51.splice($midIndex, 0, newElement);
console.log(arr51);

// Qiyinroq masalalar
// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.
let arr52 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let firstPart = [];
let secondPart = [];
for (let i = Math.floor(arr52.length / 2) - 1; i >= 0; i--) {
  firstPart.push(arr52[i]);
}
for (let i = Math.floor(arr52.length / 2); i < arr52.length; i++) {
  secondPart.push(arr52[i]);
}
secondPart.reverse();
console.log(firstPart);
console.log(secondPart);

// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).
let arr53 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let lastElement = arr53.pop();
arr53.unshift(lastElement);
for (let i = 0; i < arr53.length; i++) {
  console.log(arr53[i]);
}
// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).
let arr54 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let firstElement = arr53[0];
for (let i = 0; i <= arr54.length; i++) {
  arr54[i] = arr54[i + 1];
}
arr54[arr54.length - 1] = firstElement;
console.log(arr54);

// Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.
let arr55 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let musbat = [];
let manfiy = [];
for (let i = 0; i < arr55.length; i++) {
  if (arr55[i] > 0) {
    musbat.push(arr55[i]);
  } else {
    manfiy.push(arr55[i]);
  }
}
arr55.length = 0;
arr55 = musbat.concat(manfiy);
console.log(arr55);

// Massivning eng kichik elementini o‘chiring.
let arr56 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let minIndex = arr56[0];
let index = 0;
for (let i = 1; i < arr56.length; i++) {
  if (minIndex > arr56[i]) {
    minIndex = arr56[i];
    index = i;
  }
}
arr56.splice(index, 1);
console.log(arr56);
// Massivning eng katta elementini o‘chiring.
// Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.
// Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
// Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.
// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.

// Qo’shimcha masalalar(ixtiyoriy)
// Berilgan massivning barcha elementlarini shunday o‘zgartiringki, har bir elementning qiymati o‘zidan oldingi elementlar yig‘indisiga teng bo‘lsin.
// Massivni ikkiga ajratib, faqat juft sonlar bir massivda, toq sonlar boshqa massivda bo‘lsin.
// Berilgan massiv elementlarini faqat musbat sonlar ketma-ketligi ko‘rinishida qayta tashkil qiling.
// Massiv ichidan barcha manfiy sonlarni o‘chirib, qolganlarini o‘sish bo‘yicha tartiblang.
// Berilgan massivdan faqat juft indeksdagi elementlarni olib, ularning kvadratini hisoblab yangi massiv yarating.
// Berilgan massivning eng kichik va eng katta elementlarining indekslarini almashtiring.
// Massivdan takroriy elementlarni olib tashlang va qolgan elementlarni kamayish tartibida joylashtiring.
// Berilgan massivdagi sonlarni juft va toq sonlarga ajratib, har bir guruh uchun alohida massiv yarating.
// Massivning faqat teskari indeksdagi elementlarini yangi massivga joylashtiring.
// Massivdagi elementlarni ikkita massivga bo‘ling: musbat va manfiy sonlar uchun alohida massiv yarating, 0 larni esa alohida massivga oling.
// Massivning barcha elementlarini o‘zidan oldingi element bilan almashtiring, birinchi element esa oxirgi element bilan almashtirilsin.
// Massivdan barcha elementlarni o‘chirib tashlang, faqat bir xil sonlar qolishi kerak.
// Berilgan massiv elementlarini to‘qsonli guruhlarga ajrating (masalan, [0-10], [11-20], va hokazo).
// Massiv elementlarini faqat eng kichik son bilan bo‘lingan natijaga o‘zgartiring.
// Massivdagi sonlarning faqat birinchi marta uchraganlarining indekslarini qaytaruvchi massiv yarating.
// Berilgan massiv elementlarining faqat toq sonlardan iborat teskari nusxasini yarating.
// Massiv elementlarini shunday joylashtiringki, birinchi juft sonlar, keyin toq sonlar joylashsin.
// Massivdan faqat boshlanishi va tugashi bir xil son bo‘lgan elementlarni qaytaring (masalan, [22, 33, 44]).
// Massivni n marta aylantiring (n massivni aylantirish soni sifatida qabul qilinsin).
// Massivni shunday o‘zgartiringki, har bir element o‘zining o‘ng va chapdagi qo‘shnilari yig‘indisiga teng bo‘lsin.
// Massiv elementlarini o‘zining indeksiga ko‘paytirib yangi massiv yarating.
// Massivning har bir juft sonini 2 ga bo‘lingan holda o‘zgartiring, toq sonlar esa o‘zgarmasdan qolsin.
// Massivdan eng katta va eng kichik qiymatlar orasidagi barcha elementlarni yangi massivga ajrating.
// Massivni shunday qayta tashkil qilingki, barcha musbat sonlar boshida, manfiy sonlar oxirida joylashsin.
// Berilgan massivdan faqat elementlari boshqa elementlar yig‘indisidan kichik bo‘lgan sonlarni qaytaring.
// Massivdagi har bir elementdan bir qadam keyingisini (o‘ng qo‘shnisini) olib tashlang.
// Berilgan massivni shunday o‘zgartiringki, u faqat 0 bilan boshlangan elementlardan iborat bo‘lsin.
// Massivni ikkiga bo‘ling va birinchi yarmni kamayish, ikkinchi yarmni esa o‘sish tartibida joylashtiring.
// Berilgan massivda faqat ikkiga karrali bo‘lgan, ammo 3 ga karrali bo‘lmagan sonlarni ajrating.
// Berilgan massivda bir xil elementlar sonini hisoblang va ularning qiymatlari bilan birga yangi massiv yarating.
