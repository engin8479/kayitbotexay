const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
if(args[0] == "erkek-kız") {
    if(!args[1]) return message.channel.send('Lütfen komutları bilmiyorsanız !yardım yazın.')
if(args[1] == "kanal") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtkanal2_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt kanalı zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.channels.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt kanalını etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtkanal2_${message.guild.id}`, engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt kanalı başarı ile <#${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "log") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtlog2_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt log zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.channels.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt log kanalını etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtlog2_${message.guild.id}`, engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt log kanalı başarı ile <#${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "erkek-rol") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıterkek_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt erkek rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt erkek rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıterkek_${message.guild.id}`, engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt erkek rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "kız") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtkız_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt kız rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt kız rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtkız_${message.guild.id}`, engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt kız rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "yetkili-rol") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtyetkili2_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt yetkili rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen yetkili rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtyetkili2_${message.guild.id}`, engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt yetkili rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "alınacak-rol") {
    let kontrol = db.fetch(`kayıtisimyaş_${message.guild.id}`)
if(kontrol) return message.channel.send('İsim yaş kayıt sistemi ayarlanmış bu yüzden erkek kız ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtalınacak2_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt alınacak rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt alınacak rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtalınacak2_${message.guild.id}`,engin.id)
db.set(`kayıterkekkız_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt alınacak rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "ayarlar") {
    let logvar = db.fetch(`kayıtlog2_${message.guild.id}`)
    if(logvar == logvar) {var log = `<#` + logvar + `>`}
    if(logvar == undefined) {var log = "ayarlanmamış"}
    let kanalvar = db.fetch(`kayıtkanal2_${message.guild.id}`)
    if(kanalvar == kanalvar) {var kanal = `<#` + kanalvar + `>`}
    if(kanalvar == undefined) {var kanal = "ayarlanmamış"}
    let yetkilivar = db.fetch(`kayıtyetkili2_${message.guild.id}`)
    if(yetkilivar == yetkilivar) {var yetkili = `<@&` + yetkilivar + `>`}
    if(yetkilivar == undefined) {var yetkili = "ayarlanmamış"}
    let erkekvar = db.fetch(`kayıterkek_${message.guild.id}`)
    if(erkekvar == erkekvar) {var erkek = `<@&` + erkekvar + `>`}
    if(erkekvar == undefined) {var erkek = "ayarlanmamış"}
    let kızvar = db.fetch(`kayıtkız_${message.guild.id}`)
    if(kızvar == kızvar) {var kız = `<@&` + kızvar + `>`}
    if(kızvar == undefined) {var kız = "ayarlanmamış"}
    let alınacakvar = db.fetch(`kayıtalınacak2_${message.guild.id}`)
    if(alınacakvar == alınacakvar) {var alınacak = `<@&` + alınacakvar + `>`}
    if(alınacakvar == undefined) {var alınacak = "ayarlanmamış"}
    const embed = new discord.MessageEmbed()
    .setTitle(':book:  Kayıt ayarlar  :book:')
    .setURL('https://discord.gg/W2ZjTfQBBG')
    .addField(':pencil2:  Kayıt Log', log)
    .addField(':pencil2:  Kayıt kanal', kanal)
    .addField(':pencil2:  Kayıt Yetkili rol', yetkili)
    .addField(':pencil2:  Kayıt Erkek rol', erkek)
    .addField(':pencil2:  Kayıt Kız Rol', kız)
    .addField(':pencil2:  Kayıt Alınacak Rol', alınacak)
    return message.channel.send(embed)
}
}
if(args[0] == "isim-yaş") {
    if(!args[1]) return message.channel.send('Lütfen komutları bilmiyorsanız !yardım yazın.')
if(args[1] == "kanal") {
    let kontrol = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(kontrol) return message.channel.send('Erkek kız kayıt sistemi ayarlanmış bu yüzden isim yaş ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtkanal_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt kanalı zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.channels.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt kanalını etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtkanal_${message.guild.id}`, engin.id)
db.set(`kayıtisimyaş_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt kanalı başarı ile <#${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "log") {
    let kontrol = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(kontrol) return message.channel.send('Erkek kız kayıt sistemi ayarlanmış bu yüzden isim yaş ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtlog_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt log zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.channels.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt log kanalını etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtlog_${message.guild.id}`, engin.id)
db.set(`kayıtisimyaş_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt log kanalı başarı ile <#${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "alınacak-rol") {
    let kontrol = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(kontrol) return message.channel.send('Erkek kız kayıt sistemi ayarlanmış bu yüzden isim yaş ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtalınacak_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt alınacak rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt alınacak rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtalınacak_${message.guild.id}`, engin.id)
db.set(`kayıtisimyaş_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt alınacak rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "verilecek-rol") {
    let kontrol = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(kontrol) return message.channel.send('Erkek kız kayıt sistemi ayarlanmış bu yüzden isim yaş ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtverilecek_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt verilecek rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen kayıt verilecek rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtverilecek_${message.guild.id}`, engin.id)
db.set(`kayıtisimyaş_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt verilecek rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "yetkili-rol") {
    let kontrol = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(kontrol) return message.channel.send('Erkek kız kayıt sistemi ayarlanmış bu yüzden isim yaş ayarlayamazsınız!')
    let kontroll = db.fetch(`kayıtyetkili_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
    .setTitle('HATA')
    .setURL('https://discord.gg/gUDFmKvaGC')
    .setDescription('Kayıt yetkili rol zaten ayarlı!')
    .setFooter(message.author.username)
    .setTimestamp()
    if(kontroll) return message.channel.send(embedd)
    if(!kontroll) {
let engin = message.mentions.roles.first()
const embed = new discord.MessageEmbed()
.setTitle('HATA')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription('Lütfen yetkili rolü etiketleyiniz!')
.setFooter(message.author.username)
.setTimestamp()
if(!engin) return message.channel.send(embed)
db.set(`kayıtyetkili_${message.guild.id}`, engin.id)
db.set(`kayıtisimyaş_${message.guild.id}`, "açık")
const embeddd = new discord.MessageEmbed()
.setTitle('Ayarlandı')
.setURL('https://discord.gg/gUDFmKvaGC')
.setDescription(`Kayıt yetkili rol başarı ile <@&${engin.id}> olarak ayarlandı`)
.setFooter(message.author.username)
.setTimestamp()
return message.channel.send(embeddd)
}
}
if(args[1] == "ayarlar") {
    let logvar = db.fetch(`kayıtlog_${message.guild.id}`)
    if(logvar == logvar) {var log = `<#` + logvar + `>`}
    if(logvar == undefined) {var log = "ayarlanmamış"}
    let kanalvar = db.fetch(`kayıtkanal_${message.guild.id}`)
    if(kanalvar == kanalvar) {var kanal = `<#` + kanalvar + `>`}
    if(kanalvar == undefined) {var kanal = "ayarlanmamış"}
    let yetkilivar = db.fetch(`kayıtyetkili_${message.guild.id}`)
    if(yetkilivar == yetkilivar) {var yetkili = `<@&` + yetkilivar + `>`}
    if(yetkilivar == undefined) {var yetkili = "ayarlanmamış"}
    let alınacakvar = db.fetch(`kayıtalınacak_${message.guild.id}`)
    if(alınacakvar == alınacakvar) {var alınacak = `<@&` + alınacakvar + `>`}
    if(alınacakvar == undefined) {var alınacak = "ayarlanmamış"}
    let verilecekvar = db.fetch(`kayıtverilecek_${message.guild.id}`)
    if(verilecekvar == verilecekvar) {var verilecek = `<@&` + verilecekvar + `>`}
    if(verilecekvar == undefined) {var verilecek = "ayarlanmamış"}
    const embed = new discord.MessageEmbed()
    .setTitle(':book:  Kayıt ayarlar  :book:')
    .setURL('https://discord.gg/W2ZjTfQBBG')
    .addField(':pencil2:  Kayıt Log', log)
    .addField(':pencil2:  Kayıt kanal', kanal)
    .addField(':pencil2:  Kayıt Yetkili rol', yetkili)
    .addField(':pencil2:  Kayıt Alınacak rol', alınacak)
    .addField(':pencil2:  Kayıt Verilecek Rol', verilecek)
    return message.channel.send(embed)
}
}
if(args[0] == "sıfırla-erkek-kız") {
db.remove(`kayıtkanal2_${message.guild.id}`)
db.remove(`kayıtlog2_${message.guild.id}`)
db.remove(`kayıtyetkili2_${message.guild.id}`)
db.remove(`kayıtalınacak2_${message.guild.id}`)
db.remove(`kayıterkek_${message.guild.id}`)
db.remove(`kayıtkız_${message.guild.id}`)
return message.channel.send('Sıfırlandı')
}
if(args[0] == "sıfırla-isim-yaş") {
    db.remove(`kayıtkanal_${message.guild.id}`)
    db.remove(`kayıtlog_${message.guild.id}`)
    db.remove(`kayıtyetkili_${message.guild.id}`)
    db.remove(`kayıtalınacak_${message.guild.id}`)
    db.remove(`kayıtverilecek_${message.guild.id}`)
    return message.channel.send('Sıfırlandı')
}
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel:0,
aliases: []
}
exports.help = {
name: "kayıt-ayarla"
}