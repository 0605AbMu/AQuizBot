const http = require('http');
const host ="localhost"
const port = 8000;
const requestListener = function (req, res){};
const server = http.createServer(requestListener);
server.listen(port, host, () => {

  console.log('Server is running on http://${host}:${port}');
})


const coa = require('koa')
const koaBody = require('koa-body');
const timer = require('timers');
const fs = require('fs');
const data = fs.readFileSync('acces.txt','utf-8');
const lines = data.split(/\r?\n/);

const data2 = fs.readFileSync('JavobA','utf-8');
const lines2 = data2.split(/\r?\n/);


const data3 = fs.readFileSync('JavobB','utf-8');
const lines3 = data3.split(/\r?\n/);






const data4 = fs.readFileSync('JavobC','utf-8');
const lines4 = data4.split(/\r?\n/);

const data5 = fs.readFileSync('Javoblar','utf-8');
const lines5 = data5.split(/\r?\n/);
var asav ='';
var bsav ='';
var csav ='';
 i=0;
var tru=0;
var fal=0;
var s='';
var st='';
const {Telegraf, Extra, Markup, Telegram} = require('telegraf');
const { timeStamp } = require('console');
const extra = new Extra();

const start = Markup.inlineKeyboard([
    Markup.callbackButton('Testni boshlash!', 'startr'),

]);
    const token = '1236255011:AAHg_bRNVZqxPwVJnNHMFpASq5_UlYRhmiE'
const bot = new Telegraf(token);

bot.start((msg)=>{
  msg.telegram.sendMessage('1179599037', msg.chat.username+' yoki '+msg.chat.first_name+' yoki '+msg.chat.last_name+' botdan foydalanyabdi');
msg.reply("Assalomu alaykum!. Abdumannon Shamsiyevning yordamchi botiga Hush Kelibsiz! \n Testni boshlash uchun quyidagi tugmani bosing", Extra.markup(start));


});

bot.action('startr', (msg)=>{
  const account = fs.readFileSync('accounts','utf-8');
  if (account.search(msg.chat.first_name)==-1){
  fs.appendFileSync('accounts',msg.chat.first_name);
  msg.reply('Diqqat❗️❗️❗️\nHurmatli Testni qatnashuvchisi, Tesni yechayotganda shpargalkadan foydalanish yoki foydalanmaslik o`z vijdoningizga havola. Men sizga buni shunchaki eslatib qo`yyabman.')
    msg.reply('Tayyorlaning...');
timer.setTimeout(function(){
  msg.reply('3');  
  
}, 1000);

i=0;
fal=0;
tru=0;
s='';
timer.setTimeout(function(){
  msg.reply('2');
}, 3000);

timer.setTimeout(function(){
  msg.reply('1');
}, 5000);

timer.setTimeout(function(){
  msg.reply('Boshladik...');
}, 7000);


timer.setTimeout(function(){
  ad();
  
    msg.reply('1-savol\n'+lines[i]+'\n'+asav+'\n'+bsav+'\n'+csav, Extra.markup(keyboard));
    
},9000);

  }
  else{
    msg.reply('Siz testni ishlagansiz! Testni ishlashga faqat bitta imkoniyat beriladi.')
  }

});

bot.action('a', (msg)=>{
msg.deleteMessage();
    if (lines2[i]==lines5[i]){ st='A'};
    if (lines3[i]==lines5[i]){ st='B'};
    if (lines4[i]==lines5[i]){ st='C'};  
    if (st=='A') {
        s = s+'✅'+(i+1)+'-savolga javobingiz: A\n'+'To`g`ri javob: '+st+'\n';  }
        else {
          s = s+'❌'+(i+1)+'-savolga javobingiz: A\n'+'To`g`ri javob: '+st+'\n';  
        };
if (lines2[i]==lines5[i]){ tru++};

if (lines.length-1>i+1){
i++;
ad(); 
msg.reply((i+1)+'-savol\n'+lines[i]+'\n'+asav+'\n'+bsav+'\n'+csav, Extra.markup(keyboard));

} else{
    fal = (i+1) - tru;
    msg.reply('Testdagi savollar tugadi.'+'\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal)
    if (msg.chat.username!=null) {
    msg.telegram.sendMessage('1179599037', msg.chat.username+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);}
    else{msg.telegram.sendMessage('1179599037', msg.chat.first_name+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);


}
msg.reply('Sizning tanlagan javoblaringiz sharhi :\n'+s);
}
});

bot.action('b', (msg)=>{
    msg.deleteMessage();
    st='';

    if (lines2[i]==lines5[i]){ st='A'};
    if (lines3[i]==lines5[i]){ st='B'};
    if (lines4[i]==lines5[i]){ st='C'};  
    if (st=='B') {
  s = s+'✅'+(i+1)+'-savolga javobingiz: B\n'+'To`g`ri javob: '+st+'\n';  }
  else {
    s = s+'❌'+(i+1)+'-savolga javobingiz: B\n'+'To`g`ri javob: '+st+'\n';  
  };
    if (lines3[i]==lines5[i]){ tru++};
    
    if (lines.length-1>i+1){
    i=i+1;
    ad();
    msg.reply((i+1)+'-savol\n'+lines[i]+'\n'+asav+'\n'+bsav+'\n'+csav, Extra.markup(keyboard));
    } else{
        fal = (i+1) - tru;
        msg.reply('Testdagi savollar tugadi.'+'\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal)
        if (msg.chat.username!=null) {
        msg.telegram.sendMessage('1179599037', msg.chat.username+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);}
        else{msg.telegram.sendMessage('1179599037', msg.chat.first_name+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);}
        msg.reply('Sizning tanlagan javoblaringiz sharhi :\n'+s);
    }
    });

    bot.action('c', (msg)=>{
        msg.deleteMessage();
        if (lines2[i]==lines5[i]){ st='A'};
        if (lines3[i]==lines5[i]){ st='B'};
        if (lines4[i]==lines5[i]){ st='C'};  
        if (st=='C') {
            s = s+'✅'+(i+1)+'-savolga javobingiz: C\n'+'To`g`ri javob: '+st+'\n';  }
            else {
              s = s+'❌'+(i+1)+'-savolga javobingiz: C\n'+'To`g`ri javob: '+st+'\n';  
            };
        if (lines4[i]==lines5[i]){ tru++};
        
        if (lines.length-1>i+1){
        i++; 
        ad();
        msg.reply((i+1)+'-savol\n'+lines[i]+'\n'+asav+'\n'+bsav+'\n'+csav, Extra.markup(keyboard));
        } else{
            fal = (i+1) - tru;
            msg.reply('Testdagi savollar tugadi.'+'\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal)
            if (msg.chat.username!=null) {
            msg.telegram.sendMessage('1179599037', msg.chat.username+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);}
            else{msg.telegram.sendMessage('1179599037', msg.chat.first_name+' ning\nTestdagi savollar soni: '+(i+1)+'\nTo`g`ri javoblar soni: '+tru+'\nNoto`g`ri javoblar soni: '+fal);}
            msg.reply('Sizning tanlagan javoblaringiz sharhi :\n'+s);
        }
        });


bot.on('message', (msg)=>{
  if (msg.chat.id=='1179599037'){
    try{
  msg.replyWithAudio(msg.update.message.audio);}
  catch(err){
    console.log(err);
  }
  } else{
    msg.reply('Siz Bot adiminstratori emassiz,\n Men sizga yordam bera olmayman!');
  }
});

bot.launch({polling:true});
function ad(){
asav='';
bsav='';
csav='';
asav='A)'+' '+lines2[i];
bsav='B)'+' '+lines3[i];
csav='C)'+' '+lines4[i];


}

var  keyboard = Markup.inlineKeyboard([
  
  Markup.callbackButton('A', 'a'),
  Markup.callbackButton('B', 'b'),
  Markup.callbackButton('C', 'c')
  ]);