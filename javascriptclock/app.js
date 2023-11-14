
function names() {
    let name = document.querySelector("#myName")
    let getName = prompt("Lütfen isminizi giriniz")    
    name.innerHTML = getName;
}


let clock = document.querySelector(".clock")



function showTime() {

    let now = new Date() // JS'in hazır olarak sunduğu date nesnesinden now adıyla yeni bir obje ürettik 
    let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) // now objemiz ile hafta günlerini türkçe ve String formatında çektik/ day isimli değişkene atadık. 
    let time = now.toLocaleTimeString('tr-TR')  //oluşturduğumuz now objesi ile daha önceden tanımlanmış yerel saat, dakika ve saniyeti time isimli değişkene atadık 
    let myClock = document.querySelector("#myClock") // DOM ile saati yazdıracağımız div' e ulaştık
    myClock.innerHTML = time + ' ' + day // Değişkenlere atadığımız değerleri innerHTML kullanarak ekrana yazdırdık
    
}

setInterval(showTime, 1000) //saniye artı
names()
showTime()
