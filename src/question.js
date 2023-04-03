function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("Hangisi Javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "NPM", c: "Nuget", d: "Typescript"}, "b"),
    new Soru("Hangisi  Front-End kapsamında değerlendirilmez?", {a: "css", b: "html", c: "javascript", d: "sql"}, "d"),
    new Soru("Hangisi  Back-End kapsamında değerlendirilir?", {a: "Node.js", b: "typescript", c: "angular", d:"react"}, "a"),
    new Soru("Hangisi javascript programlama dilini kullanmaz?", {a: "react", b: "angular", c: "vue.js", d: "asp.net"}, "b"),
];