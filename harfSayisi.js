//kelime sayısı bulma uygulaması...

let metin =
  "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, omnis temporibus dignissimos officia adipisci sed quasi ratione dolorum neque cumque quia quibusdam ullam possimus. Magnam facilis tenetur, laudantium a dolorum explicabo, corporis deleniti aspernatur excepturi distinctio, voluptate est! Quibusdam, blanditiis?";

let harf = prompt("harfi giriniz");

let sonuc = harfBul(harf);

alert("harf sayısı: " + sonuc);

function harfBul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i) === harf) {
      toplam += 1;
    }
  }
  return toplam;
}
