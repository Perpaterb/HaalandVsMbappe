
function pullAllData(name) {
    const nameData = document.querySelector("#"+name).querySelector("tbody")
    const nameSeasons = nameData.querySelectorAll(`[data-stat="season"]`)
    const nameGames = nameData.querySelectorAll(`[data-stat="games"]`)
    const nameGoals = nameData.querySelectorAll(`[data-stat="goals"]`)
    const nameAssists = nameData.querySelectorAll(`[data-stat="assists"]`)
 
    const nameSeasonsArray = []
    for(var i = nameSeasons.length; i--; nameSeasonsArray.unshift(nameSeasons[i].innerHTML));

    const nameGamesArray = []
    for(var i = nameGames.length; i--; nameGamesArray.unshift(nameGames[i].innerHTML));

    const nameGoalsArray = []
    for(var i = nameGoals.length; i--; nameGoalsArray.unshift(nameGoals[i].innerHTML));

    const nameAssistsArray = []
    for(var i = nameAssists.length; i--; nameAssistsArray.unshift(nameAssists[i].innerHTML));

    for(i in nameSeasonsArray){
        if (nameSeasonsArray[i].includes("-") == false){
            nameSeasonsArray[i] = String(parseInt(nameSeasonsArray[i])-1) + "-" + nameSeasonsArray[i]
        }
    }

    return [nameSeasonsArray,nameGamesArray,nameAssistsArray,nameGoalsArray]
}

const haalandArray = pullAllData("haaland")
const mbappeArray = pullAllData("mbappe")

function populate(playerDataArray, name){
    for(let i in playerDataArray[0]){ 
        const nameYearDiv = document.getElementById(playerDataArray[0][i]).querySelector("#"+name+"stats")
        const playerDivGames = nameYearDiv.querySelector(".apps").querySelector("span")
        const playerDivAssists = nameYearDiv.querySelector(".assists").querySelector("span")
        const playerDivGoals = nameYearDiv.querySelector(".goals").querySelector("span")
        
        if (playerDivGames.innerHTML == "-") {
            playerDivGames.innerHTML = parseInt(playerDataArray[1][i])
        } else{
            playerDivGames.innerHTML = parseInt(playerDivGames.innerHTML) + parseInt(playerDataArray[1][i])
        }

        if (playerDivAssists.innerHTML == "-") {
            playerDivAssists.innerHTML = parseInt(playerDataArray[2][i])
        } else{
            playerDivAssists.innerHTML = parseInt(playerDivAssists.innerHTML) + parseInt(playerDataArray[2][i])
        }

        if (playerDivGoals.innerHTML == "-") {
            playerDivGoals.innerHTML = parseInt(playerDataArray[3][i])
        } else{
            playerDivGoals.innerHTML = parseInt(playerDivGoals.innerHTML) + parseInt(playerDataArray[3][i])
        }
    }
}

populate(haalandArray, "haaland")
populate(mbappeArray, "mbappe")


