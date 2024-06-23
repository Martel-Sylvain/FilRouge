// COMPTE A REBOURS
// définition de la fonction compte à rebours
(function () {
    // définition des constantes en ms   
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // Détermination de la date de fin
    // 1-obtenir la date et l'heure actuelle
    let today = new Date(),
        // 2-trouver le jour du mois et le convertir en chaine de caractère(string), assure de mettre toujours 2 caractères au résultat (padStart)
        dd = String(today.getDate()).padStart(2, "00"),
        // 3-même chose pour le mois
        mm = String(today.getMonth() + 1).padStart(2, "00"),
        // 4-pour l'année, donnera un nombre à 4 chiffres
        yyyy = today.getFullYear(),
        // 5-définition de la date de fin, la date de l'évènement
        évènement = "02/25/2025";

    console.log("Date de l'évènement", évènement);


    // définition du compte à rebours
    // 1-new Date(birthday) = création d'un nouvel objet date ou date = birthday. 
    // 2-getTime() = renvoie le nombre de ms écoulées depuis le 1er janvier 1970 00:00:00 UTC jusqu'à la date spécifiée, utilisé pour faire des calcul de temps
    const countDown = new Date(évènement).getTime();
    console.log("Countdown time in ms:", countDown);


    // définition de l'intervalle pour le compte à rebours
    // setInterval est une fonction JS qui éxecute une fonction de manière répétitive avec un délai entre chaque execution. La function qui est en argument sera exécutée toute les n ms où n se trouve tour à la fin avant la femeture de la parenthèse et est ici = à 0)
    x = setInterval(function () {
        // ici new Date().getTime() obtient l'heure actuelle en ms depuis le 1er janvier 1970 00:00:00UTC
        const now = new Date().getTime(),
            // ici on calcule la "distance" entre l'heure actuelle et la date cible
            distance = countDown - now;
        // ici on va calculer les nombres de jours, heures, minutes, secondes restantes et mettre à jour le texte des éléments HTML correspondants
        // calcule le nombre de jours restants
        document.getElementById("days").innerText = Math.floor(distance / (day)),
            // calcule le nombre d'heures restantes après avoir soustrait le nombre de jours complets
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            // calcule le nombre de minutes restantes après avoir soustrait le nombre d'heures complètes
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            // calcule le nombre de secondes restantes après avoir soustrait le nombre de minutes complètes
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        // on vérifie si on a atteint la date cible
        if (distance < 0) {
            // le texte avec l'ID titre_compte_à_rebours est mis à jour
            document.getElementById("titre_compte_à_rebours").innerText = "C'est parti!!";
            // l'élément avec l'ID compte_à_rebours est caché
            document.getElementById("compte_à_rebours").style.display = "none";
            // permet d'arrêter notre fonction Interval
            clearInterval(x);
        }
        //seconds
    }, 1000)
}());


// ----------------------------------------------------------------------
