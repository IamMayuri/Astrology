
//based on month , size 22
const zodiac_sign = ["Capricorn","Aquarius", "Pisces", "Aries",  "Taurus","Gemini",  "Cancer", "Leo", "Virgo", "Libra", "Scorpio","Sagittarius", ];


//based on date, size 31
 const compliments = [
    "You have an amazing sense of humor!",
    "You are so thoughtful and kind.",
    "Your smile lights up the room.",
    "You are an incredibly good listener.",
    "You have such a positive energy about you.",
    "You're an inspiration to everyone around you.",
    "You have a brilliant mind!",
    "Your confidence is truly admirable.",
    "You always know how to make people feel special.",
    "You are so talented and creative!",
    "Your kindness is contagious.",
    "You're such a great friend.",
    "Your passion and dedication are impressive.",
    "You have a heart of gold.",
    "You're a great problem solver.",
    "You have the ability to make everyone feel at ease.",
    "Your laughter is so infectious!",
    "You bring out the best in others.",
    "You have an amazing work ethic.",
    "You are a beautiful person inside and out.",
    "You have a great sense of style.",
    "Your energy makes every place brighter.",
    "You have such a calming presence.",
    "You're an amazing cook (or whatever talent they have).",
    "You always know how to make someone feel better.",
    "You're the kind of person everyone wants to be around.",
    "You inspire others to be their best selves.",
    "Your creativity knows no bounds.",
    "You're so thoughtful and considerate.",
    "You bring joy wherever you go.",
    "You're someone everyone can rely on.",
    "Your enthusiasm is contagious!"
];

//size 20
 const victim_compliments = [
    "You always put others first, even when it means sacrificing your own needs.",
    "You have such a big heart, and you give so much without expecting anything in return.",
    "You’re always the one who helps others, even when no one notices.",
    "You do so much for people, yet rarely get the recognition you deserve.",
    "You always give your best, even when others take advantage of your kindness.",
    "You make the world a better place, even when it feels like no one appreciates it.",
    "You always support others, but sometimes forget to ask for the support you need.",
    "You're always there for others, even when they don't show up for you.",
    "You consistently put others' happiness before your own, even when it goes unnoticed.",
    "You have such a caring nature, and people often take it for granted.",
    "You give so much love, but it’s sad that not everyone returns it.",
    "You always sacrifice for the well-being of others, but rarely get the same in return.",
    "You're so selfless in your actions, but sometimes it feels like no one sees it.",
    "You do so much to make others happy, yet sometimes forget to take care of yourself.",
    "Your kindness is a rare gift, yet it's not always appreciated the way it should be.",
    "You always show up for others, but it feels like you're often left behind.",
    "You always try to make everyone’s life better, but no one really does the same for you.",
    "You constantly give, but it often seems like others don’t return the favor.",
    "You make sure others are okay, but don't get the same in return when you need it.",
    "You’re always giving love and care to others, but it feels like no one notices your efforts."
];

//size 30
const kindness_recommendations = [
    "Give someone a genuine compliment today—it'll brighten their day.",
    "Help someone with a small task, even if it's just holding the door or offering a hand.",
    "Smile at a stranger; it’s amazing how a simple smile can change someone’s mood.",
    "Listen carefully when someone talks, and make them feel heard and valued.",
    "Send a positive message to a friend or family member just to let them know you're thinking of them.",
    "Donate clothes or items you no longer use to someone who will truly benefit from them.",
    "Hold the door open for someone, especially if they're carrying something or seem in a rush.",
    "Take a moment to write a thank-you note to someone who’s done something kind for you.",
    "If someone’s getting on your nerves, take a deep breath and practice patience—they may need it.",
    "Ask someone how their day is going, and really listen to what they have to say.",
    "Give someone a compliment that’s personal and sincere, something they can really appreciate.",
    "Offer to help out a busy friend or family member by running an errand for them.",
    "Support a cause that matters to you—whether it’s your time, a donation, or a kind gesture.",
    "Post something positive on social media to share good vibes and brighten someone's feed.",
    "Volunteer your time for a local cause that could use an extra set of hands.",
    "Give someone a hug or a pat on the back if they seem like they could use some comfort.",
    "Praise someone for their efforts—whether they succeed or not, acknowledge their hard work.",
    "If someone is in a rush, let them go ahead of you in line—it’s a simple but kind gesture.",
    "Remember someone’s name the next time you meet—it shows you care and are paying attention.",
    "Be kind to yourself—treat yourself with the same care and compassion you offer others.",
    "Stand up for someone who’s being treated unfairly, and make sure they feel supported.",
    "Send someone flowers or a small gift, just to remind them they're appreciated.",
    "If you see someone struggling, offer help, even if it’s just a little encouragement.",
    "Encourage someone to express their feelings and validate their emotions, making them feel understood.",
    "Give a thoughtful review or recommendation for someone’s work or effort—people appreciate being recognized.",
    "Acknowledge someone’s effort, even if the result isn't perfect—it’s the thought and work that counts.",
    "Offer your seat to someone who might need it more than you, like an elderly person or someone carrying heavy bags.",
    "Let someone know you appreciate them for something they’ve done, even if it seems small—every effort matters.",
    "If you notice someone down, remind them of their strengths and how amazing they are.",
    "Spread positivity with a kind word or a supportive gesture—it could be the highlight of someone’s day."
];


//size 20

const futurePredictions = [
    "Great things are on the way for you – get ready for some exciting new opportunities!",
    "The winds of change are blowing in your favor, bringing positivity your way.",
    "The next chapter of your life is going to be filled with growth and beautiful successes.",
    "Your hard work is about to pay off in ways you can't even imagine – keep going!",
    "Get ready to receive some wonderful news that will bring you immense joy soon.",
    "New, amazing connections are heading your way, unlocking exciting possibilities for you.",
    "You're about to step into the life you've always dreamed of – it’s just around the corner!",
    "A time of abundance and prosperity is coming your way, and it’s going to be amazing!",
    "Your efforts are going to bring you some unexpected rewards that will make you smile.",
    "Life is about to get even better – positive, life-changing changes are coming your way!",
    "You’ll soon find the clarity and confidence you need to make your dreams come true.",
    "What you've been wishing for is about to happen – your dreams are on the verge of coming true.",
    "Big things are on the horizon for you – stay excited, keep your eyes open!",
    "The universe is aligning to bring you amazing experiences – be ready for them!",
    "You're just moments away from a breakthrough that will lead you to even greater things.",
    "Fresh opportunities and new beginnings are on their way, bringing you joy and excitement.",
    "Something wonderful is about to happen in your life, and it’s going to be better than you imagined.",
    "You’ll soon find yourself surrounded by positive energy, success, and happiness.",
    "A major opportunity is about to present itself – and it’s going to be perfect timing!",
    "All your hard work is leading to something big – get ready to achieve everything you’ve been working for!"
];



const form = document.getElementById("dobForm");
form.addEventListener('submit',(event)=>{
    event.preventDefault();

     const name = document.getElementById('name').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

 const result=document.getElementById('result');

 const yourname = `"Hello ${name}"`;
    const birthmonth = `Your Zodiac Sign is ${zodiac_sign[month - 1]}`;
    const birthdate = compliments[day - 1];
    const victim_msg = victim_compliments[Math.floor(Math.random() * victim_compliments.length)]; // for random complement


index = (name.length*year.length)%30;
const kind_rec = kindness_recommendations[index];
index =(day*month*year)%20;
const future = futurePredictions[index];
result.innerText=`${yourname} ${birthmonth} ${birthdate} ${victim_msg} ${kind_rec} ${future} "Thankyou! All the best for your future."`;
}
                      //,24 * 60 * 60 * 1000); // what is this ?
 

