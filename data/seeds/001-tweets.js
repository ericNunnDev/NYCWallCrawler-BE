
exports.seed = function(knex, Promise) {
  return knex('tweets').del()
    .then(function () {
      return knex('tweets').insert([
        {id: 1, username: 'IreneC', comment: 'Does anyone still take JJJatHome seriously anymore?'},
        {id: 2, username: 'TracyBarker', comment: 'My wedding is later today and all the toilets in the building backed up at once. #WHYME'},
        {id: 3, username: 'B_Waters', comment: 'Just my luck, the water shuts off during my shower. Had to rinse my hair with toilet water. I\'m so over this city...'},
        {id: 4, username: 'cabbieNYC', comment: 'Thank god Devil\'s Breath rolled back - no one wants a cab during a plague - thought I was going to lose my medallion!'},
        {id: 5, username: 'ViolaBishop', comment: 'NYCWallCrawler Heard some bombs going off, was it you Spidey?'},
        {id: 6, username: 'Marty_Barker', comment: 'I just heard some explosions and saw Spider-Man swing by. Can\'t a guy get some rest around here?! #NapRuined'},
        {id: 7, username: 'Randal_E', comment: 'So how mmany times has NYCWallCrawler saved New York now??? #SpiderManForMayor'},
        {id: 8, username: 'EyesOPen', comment: 'I was wrong. It is clear now that Osborn was not the mastermind, but just another patsy of even more sinister forces.'},
        {id: 9, username: 'DrHaganESU', comment: 'Can\'t believe Otto Octavius was behind Devil\'s Breath. He was one of my finest students (decades ago), sad to see how far he\'s fallen...'},
        {id: 10, username: 'SoyGloria', comment: 'Spider-Guy did it again! Dunno where this city would be without him. Or where I would be, for that matter. Thanks NYCWallCrawler!'},
        {id: 11, username: 'L_Pallav', comment: 'Dude! Spider-Man just beat the tar out of a buncha guys in masks! #SoFast'},
        {id: 12, username: 'BradDavisQB', comment: 'Yo but how crazy was that fight between Spidey and that Doctor Octopus guy on the side of Oscorp! SO. COOL. #GoSpideyGo'},
        {id: 13, username: 'SoyGloria', comment: 'Guess what: It\'s MANAGER Gloria Now.'},
        {id: 14, username: 'No1BrushHead', comment: 'I think JJJ is still usually right, but after going through this disaster, I feel like he paints Spider-Man too broadly.'},
        {id: 15, username: 'DorloresWalker', comment: 'Call me crazy but I\'m pretty sure I just saw a mechanical spider scurry by...'},
        {id: 16, username: 'Mable_Bishop', comment: 'Just had a nice talk with Spider-Man while on the subway. We talked about aliens and space and stuff. The dude is pretty deep.'},
        {id: 17, username: 'SilverSpoonCafe', comment: 'NYCWallCrawler three customers just saw you stop a mugging. Special cup of joe waiting just for you!'},
        {id: 18, username: 'SpiderNerdArmy', comment: 'Yesss! My Spider-Man x Self-Insert fanfic is almost complete!'},
        {id: 19, username: 'BobW', comment: 'SUPERVILLIANS HAVE ESCAPED THE RAFT?! THAT\'S ALL WE NEED, THE FLYING BIRD MAN, THE HUMAN RHINO AND THE GUY WITH A SCORPION TAIL RUNNING LOSE!!'},
        {id: 20, username: 'S_Rivera', comment: 'Spider-Man just popped in and threw trash around! JJJ was right! He\'s a menace! #Spidermenace'},
        {id: 21, username: 'Elbert_J', comment: 'Spidey is my anti-drug.'},
        {id: 22, username: 'VilmaK', comment: 'Yo! NYCWallCrawler you gonna come back and pick up all this freakin trash you threw everywhere!?'},
        {id: 23, username: 'E_Reed', comment: 'Yo crazy crazy crazy car crash north of Frankie\'s - use alternate routes!'},
        {id: 24, username: 'TheDailyBugle', comment: 'WE\'RE CURED!! All the details on the antiserum and how to get it in a special edition of the Daily Bugle!'},
        {id: 25, username: 'TheDailyBugle', comment: 'You can\'t keep New Yorkers down! Celebrate the resiliency of our great city in the latest Daily Bugle! '},
        {id: 26, username: 'ProducerJared', comment: 'With New York finally getting back to normal, JJJatHome discusses NYCWallCrawler\'s role in recent events. What he has to say might surprise you!'},
        {id: 27, username: 'FEAST_Shelter', comment: 'As #DevilsBreath outbreak subsides, today we mourn many losses, including our own May_Parker. She represented the best of NYC.'},
        {id: 28, username: 'ESUBoo', comment: 'Good thing I turned down that internship at Oscorp MayorOsborn said it would be a blast if I worked there'},
        {id: 29, username: 'RobtheBuildBro', comment: 'Spider-Man was wreaking havoc in midtown, "JOB SECURITY!!!"'},
        {id: 30, username: 'N_David', comment: 'I\'m Norman Osborn! I only fund science when MY company gets to do it! I have more money than sense!'},
        {id: 31, username: 'Darin_M', comment: 'You\'re a hack, JJJatHome.'},
        {id: 32, username: 'GosseP', comment: 'Everyone in our building is boarded up on the top floor, and we\'re safe. Help each other out. Band together. We can make it through this.'},
        {id: 33, username: 'HamletF', comment: 'He\'s gone. Just didn\'t have the strength left. Forget about Devil\'s Breath. Norman Osborn\'s the one who killed my son.'},
        {id: 34, username: 'BradDavisQB', comment: 'Another W, this team is rollin!! We\'re gonna make a run for the national title this year! #ESUfootball #CantStopWontStop'},
        {id: 35, username: 'Marty_Barker', comment: 'Officer Davis is the noblest kind of hero any of us could ever hope to be. His bravery will not be forgotten.'},
        {id: 36, username: 'C_Cole', comment: 'Lol I find JJJatHome rants so entertaining'},
        {id: 37, username: 'Tracy_Santiago', comment: 'People still take the Daily Bugle seriously? No wonder everyone is so misinformed.'},
        {id: 38, username: 'OtisWalsh', comment: 'Real talk tho, why Norman Osborn always dressin like it\'s St. Patrick\'s day?'},
        {id: 39, username: 'MaxCook', comment: 'Get real, NYC, Spider-Man is just another tool of corporate oppression.'},
        {id: 40, username: 'TheDailyBugle', comment: 'Who is "The Octopus?" and what\'s his connection to the plague? Our expert team analysis in the new Bugle!'},
        {id: 41, username: 'ProducerJared', comment: 'Rumors are swirling that Spider-Man is in critical condition following his latest battle with Martin Li. Tune in for JJJatHome\'s take on the development!'},
        {id: 42, username: 'MiloCiaran', comment: 'What gave MayorOsborn the right to turn NYC into a fascist police state?'},
        {id: 43, username: 'LuciaM', comment: 'Can\'t stop the Spider - he just tore apart a Sable outpost. GREAT WORK NYCWallCrawler!!!'},
        {id: 44, username: 'KatWebb', comment: 'Sable\'s turning NYC into a dystopia - glad SM\'s stopping them.'},
        {id: 45, username: 'B_Waters', comment: 'Can it be Halloween again? Real life in this city is getting #2spoopy'},
        {id: 46, username: 'LuzSnyder', comment: 'Osborn definitely has my vote. He knows how to handle Spider-Man!'},
        {id: 47, username: 'No1Brushhead', comment: 'I can hear screaming and glass breaking from the street. Police and Sable are powerless. I don\'t know what to do.'},
        {id: 48, username: 'TheDailyBugle', comment: 'Holding Out For A Hero: New Yorkers lose hope as plague drags on, sickness worsens. How to help and find help in the new Bugle.'},
        {id: 49, username: 'W_Howard', comment: 'Convicts think NYC is their playground - SM just cut off a joyride. Get these jerks back behind bars!'},
        {id: 50, username: 'LuciaM', comment: 'You\'re hard to love JJJatHome, but you\'re even harder to hate.'},
      ]);
    });
};
