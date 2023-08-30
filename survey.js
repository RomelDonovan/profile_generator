const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 1;
const profile = {}

rl.question(`Question ${count++}: What's your name? Nicknames are also acceptable :) \n`, (name) => {
  profile.name = name
  rl.question(`Question ${count++}: What's an activity you like doing?\n`, (activity) => {
    profile.activity = activity
    rl.question(`Question ${count++}: What do you listen to while doing that?\n`, (music) => {
      profile.music = music;
      rl.question(`Question ${count++}: Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (meal) => {
        profile.meal = meal
        rl.question(`Question ${count++}: What's your favourite thing to eat for that meal?\n`, (food) => {
          profile.food = food
          rl.question(`Question ${count++}: Which sport is your absolute favourite?\n`, (sport) => {
            profile.sport = sport
            rl.question(`Question ${count++}: What is your superpower? In a few words, tell us what you are amazing at!\n`, (superpower) => {
              profile.superpower = superpower
              rl.close();
              console.log(`Profile\nName: ${profile.name}\nLikes: ${profile.activity} and listening to ${profile.music}\nFavourite Food: ${profile.food} at ${profile.meal}\nFavourite Sport: ${profile.sport}\nIf I had a superpower it would be ${profile.superpower}`);
            })
          })
        })
      })
    })
  })
});