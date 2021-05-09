const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
let seçim = db.fetch(`kayıtisimyaş_${message.guild.id}`)
let seçimm = db.fetch(`kayıterkekkız_${message.guild.id}`)
if(seçimm) {
    let kontrol = db.fetch(`kayıtkanal2_${message.guild.id}`)
    let kontroll = db.fetch(`kayıtlog2_${message.guild.id}`)
    let kontrolll = db.fetch(`kayıtyetkili2_${message.guild.id}`)
    let kontrollll = db.fetch(`kayıtalınacak2_${message.guild.id}`)
    let kontrolllll = db.fetch(`kayıterkek_${message.guild.id}`)
    let kontrollllll = db.fetch(`kayıtkız_${message.guild.id}`)
    if(!kontrol) return message.channel.send('Lütfen kayıt kanalını ayarlayın')
    if(!kontroll) return message.channel.send('Lütfen kayıt log kanalını ayarlayın')
    if(!kontrolll) return message.channel.send('Lütfen kayıt yetkili rolünü ayarlayın')
    if(!kontrollll) return message.channel.send('Lütfen kayıt alınacak rolü ayarlayın')
    if(!kontrolllll) return message.channel.send('Lütfen kayıt erkek rolünü ayarlayın')
    if(!kontrollllll) return message.channel.send('Lütfen kayıt kız rolünü ayarlayın')
    if(!message.member.roles.cache.get(kontrolll)) return message.channel.send('Sen kayıt yetkilisi değilsin!')
if(message.channel.id !== kontrol) return message.channel.send(`Bu komutu sadece <#${kontrol}> kanalında kullanabilirsin`)
let user = message.mentions.users.first()
if(!user) return message.channel.send('Lütfen kayıt edilecek kişiyi etiketleyin!')
let enginar = args[1]
if(!enginar) return message.channel.send('Lütfen erkek ve ya kız olarak cinsiyeti belirtiniz')
if(enginar == "erkek") {
    let isim = args[2]
    if(!isim) return message.channel.send('Lütfen ismi giriniz')
    let yaş = args[3]
    if(!yaş) return message.channel.send('Lütfen yaşı giriniz')
  client.guilds.cache.get(message.guild.id).members.cache.get(user.id).setNickname(`${isim} | ${yaş}`)
 message.guild.members.cache.get(user.id).roles.add(kontrolllll)
 message.guild.members.cache.get(user.id).roles.remove(kontrollll)
 const embed = new discord.MessageEmbed()
  .setTitle('Erkek Kız Kayıt sistemi')
  .setDescription(`Kaydı yapan: <@${message.author.id}> \n \n Kaydı yapılan: <@${user.id}> \n \n İsim yaş: ${isim} ${yaş} \n \n Erkek/kız: Erkek \n \n Kayıt tamamlandı mı: Tamamlandı`)
  client.channels.cache.get(kontroll).send(embed)
  return message.channel.send('Kayıt başarılı!')
}
if(enginar == "kız") {
    let isim = args[2]
    if(!isim) return message.channel.send('Lütfen ismi giriniz')
    let yaş = args[3]
    if(!yaş) return message.channel.send('Lütfen yaşı giriniz')
  client.guilds.cache.get(message.guild.id).members.cache.get(user.id).setNickname(`${isim} | ${yaş}`)
  message.guild.members.cache.get(user.id).roles.add(kontrollllll)
  message.guild.members.cache.get(user.id).roles.remove(kontrollll)
  const embed = new discord.MessageEmbed()
  .setTitle('Erkek Kız Kayıt sistemi')
  .setDescription(`Kaydı yapan: <@${message.author.id}> \n \n Kaydı yapılan: <@${user.id}> \n \n İsim yaş: ${isim} ${yaş} \n \n Erkek/kız: Kız \n \n Kayıt tamamlandı mı: Tamamlandı`)
  client.channels.cache.get(kontroll).send(embed)
  return message.channel.send('Kayıt başarılı!')
}
}
if(seçim) {
let kontrol = db.fetch(`kayıtkanal_${message.guild.id}`)
let kontroll = db.fetch(`kayıtlog_${message.guild.id}`)
let kontrolll = db.fetch(`kayıtyetkili_${message.guild.id}`)
let kontrollll = db.fetch(`kayıtalınacak_${message.guild.id}`)
let kontrolllll = db.fetch(`kayıtverilecek_${message.guild.id}`)
if(!kontrol) return message.channel.send('Lütfen kayıt kanalını ayarlayın')
if(!kontroll) return message.channel.send('Lütfen kayıt log kanalını ayarlayın')
if(!kontrolll) return message.channel.send('Lütfen kayıt yetkili rolünü ayarlayın')
if(!kontrollll) return message.channel.send('Lütfen kayıt alınacak rolü ayarlayın')
if(!kontrolllll) return message.channel.send('Lütfen kayıt verilecek rolü ayarlayın')
if(!message.member.roles.cache.get(kontrolll)) return message.channel.send('Sen kayıt yetkilisi değilsin!')
if(message.channel.id !== kontrol) return message.channel.send(`Bu komutu sadece <#${kontrol}> kanalında kullanabilirsin`)
let user = message.mentions.users.first()
if(!user) return message.channel.send('Lütfen kayıt edilecek kişiyi etiketleyin')
let isim = args[1]
if(!isim) return message.channel.send('Lütfen ismi giriniz')
let yaş = args[2]
if(!yaş) return message.channel.send('Lütfen yaşı giriniz')
client.guilds.cache.get(message.guild.id).members.cache.get(user.id).setNickname(`${isim} | ${yaş}`)
message.guild.members.cache.get(user.id).roles.add(kontrolllll)
message.guild.members.cache.get(user.id).roles.remove(kontrollll)
const embed = new discord.MessageEmbed()
.setTitle('İsim Yaş Kayıt sistemi')
.setDescription(`Kaydı yapan: <@${message.author.id}> \n \n Kaydı yapılan: <@${user.id}> \n \n İsim yaş: ${isim} ${yaş} \n \n Kayıt tamamlandı mı: Tamamlandı`)
client.channels.cache.get(kontroll).send(embed)
return message.channel.send('Kayıt başarılı!')
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "kayıt"
    }