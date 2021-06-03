 document.addEventListener("DOMContentLoaded", () => {
   const typingContainer = document.querySelector('.typing');

   const typing = ['Cześć! Miło, że udało Ci się odwiedzić moją stronę :)^', 'Od ponad roku uczę się kodować i poszukuję swojej pierwszej pracy jako frontend developer.^',
     'Zaraszam do zapoznania się z portfolio i w przypadku chęci podjęcia współpracy do kontaktu.^', 'Pozdrawiam'
   ];

   let textIndex = 0;
   let letterIndex = 0;

   let actTime = 0;

   let activeElement = typingContainer;

   const p = document.createElement('p');
   typingContainer.appendChild(p);
   activeElement = p;

   const typingFunction = (currentTime) => {

     if (currentTime - actTime > 35) {
       actTime = currentTime;
       if (typing[textIndex].length === letterIndex) {
         if (textIndex === typing.length - 1) {
           return;
         }
         return setTimeout(() => {
           letterIndex = 0;
           textIndex++;
           const p = document.createElement('p');
           typingContainer.appendChild(p);
           activeElement = p;
           requestAnimationFrame(typingFunction);
         }, 700)

       } else {
         let letter = typing[textIndex][letterIndex];

         // if (letter === "^") {
         // // const p = document.createElement('p');
         // // typingContainer.appendChild(p);
         // // activeElement = p;
         // return setTimeout(typingFunction, 1000)
         // }

         if (!(letter === "^")) {
           activeElement.textContent += letter;
         }

         letterIndex++;
       }
     }

     requestAnimationFrame(typingFunction);
   }

   typingFunction();
 })