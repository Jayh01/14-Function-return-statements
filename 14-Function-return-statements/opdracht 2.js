// const bouncer = function (binnenClub, maxToegang, age ) {
//             if (binnenClub <= 200){
//                     document.write ("Welkom come in")
//                     return toegang = ("Welkom come in ")
//                 }
//             if (age <= 18){
//                 document.write("je bent te jong")
//                 return ( "dit is een club voor volwassenen" )
//             }
//              else  {
//                     document.write ("het is nu te druk, kom later terug")
//                     return maxToegang = ("het is nu te druk, kom later terug")
//                 }

//     }
// const leeftijdCheck = function (leeftijd) {
//     if (leeftijd < 18){
//         document.write ("this is a club for adults")
//         return leeftijd = "this is a club for adults"
//     }
// }    
// const brenda = bouncer (200, 200,)
// const leeftijd2 = leeftijdCheck(17)
// console.log (brenda,);
// console.log ( leeftijd2 )


//=====================


const bouncer = function (binnenClub, age ) {
    if (binnenClub > 200){
            document.write("We zitten vol!!")
            return ("het is nu te druk, kom later terug")
        }
    if (age < 18){
        document.write("je bent te jong")
        return ( "dit is een club voor volwassenen" )
    }
     else  {
            document.write (" Welkom en kom binnen")
            return (" Welkom en kom binnen")
        }

}

const brenda = bouncer (200, 17)
console.log (brenda);

// functies die iets doen

