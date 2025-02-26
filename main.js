let name = prompt("Ismingizni kiriting:")
let harf = prompt("Harfni kiriting:")

if (name.toLowerCase().includes(harf.toLowerCase())) {
    alert (` ${name} ismda ${harf} yoq`)
} 
else {
    alert (`${name} ismda ${harf} yoq `)
}