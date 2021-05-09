const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
const embed = new discord.MessageEmbed()
.setTitle(':book:  Kayıt Yardım Menüsü  :book:')
.setDescription(`**__ERKEK KIZ KAYIT SİSTEMİ__** \n \n:paintbrush:  !kayıt-ayarla erkek-kız kanal = Kayıt kanalı ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız log = Kayıt log kanalı ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız yetkili-rol = Kayıt yetkili-rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız erkek-rol = Kayıt erkek rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız kız = Kayıt kız rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız alınacak-rol = Kayıt alınacak rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla sıfırla-erkek-kız = Kayıt sıfırlarsınız \n \n :paintbrush:  !kayıt-ayarla erkek-kız ayarlar = Kayıt ayarlarını görürsünüz\n \n **__İSİM YAŞ KAYIT SİSTEMİ__**  \n \n:paintbrush:  !kayıt-ayarla isim-yaş kanal = Kayıt kanalı ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla isim-yaş log = Kayıt log kanalı ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla isim-yaş alınacak-rol = Kayıt alınacak rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla isim-yaş verilecek-rol = Kayıt verilecek rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla isim-yaş yetkili-rol = Kayıt yetkili rol ayarlarsınız \n \n :paintbrush:  !kayıt-ayarla isim-yaş ayarlar = Kayıt ayarlarını görürsünüz  \n \n:paintbrush:  !kayıt-ayarla sıfırla-isim-yaş = Kayıt sistemi sıfırlarsınız \n \n **__BİRİNİ KAYIT ETME__** \n \n :paintbrush:  !kayıt = Kayıt edersiniz`)
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "yardım"
    }