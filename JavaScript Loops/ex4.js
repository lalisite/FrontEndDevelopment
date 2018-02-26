var course_participants = [
    {
       "eyeColor" : "brown",
       "height" :  "180",
       "name" : "lior gad"     
   },
   {
       "eyeColor" : "blue",
       "height" :  "175",
       "name" : "yoni"     
   },
   {
       "eyeColor" : "brown",
       "height" :  "185",
       "name" : "omer"     
   }
];

for(var i=0 ; i < course_participants.length; i++){
    course_participants[i].height = "175";    
}

console.log(JSON.stringify(course_participants));

