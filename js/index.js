// ================Loading Page=================
$(window).ready(function () {
  $(".loading-page").addClass("d-none");
  $("body").css({ overflow: "visible" }, 1000);
});

// ================Display Games=================
import { Games } from "./games.js";
import { displayGames } from "./ui.js";
const row = document.querySelector(".game-section .container .row");

let gamesType = document.querySelectorAll(".nav-link");
//=======================Details Variables========================

import { DetailsGame } from "./details.js";
import { displayDetails } from "./ui.js";

let DG;
let infoGame;
let response;
let rowDet = document.querySelector(".row-details");

/////////////////////////////

let games = new Games("mmorpg");
let gamesArr = await games.getGames();
let data;
data = displayGames(gamesArr);
row.innerHTML = data;

console.log(gamesArr);
for (let game of gamesType) {
  game.addEventListener("click", async function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
    console.log(this);
    games = new Games(this.innerHTML);
    console.log(games);
    gamesArr = await games.getGames();
    data = displayGames(gamesArr);
    row.innerHTML = data;
    document.querySelectorAll(".game").forEach((gameDe) => {
      gameDe.addEventListener("click", async function () {
        console.log(gameDe);
        $(".loading-page").removeClass("d-none");
        $(window).ready(function () {
          $(".loading-page").addClass("d-none");
          $("body").css({ overflow: "visible" }, 1000);
        });
        $(".gameDetails").removeClass("d-none");
        $(".home-section").addClass("d-none");
        DG = new DetailsGame(gameDe.getAttribute("data-id"));

        response = await DG.getDetails();

        infoGame = displayDetails(response);

        rowDet.innerHTML = infoGame;
      });
    });
  });
}

// ================Display Games=================

// ================Display Details for default section=================
let gamesDet = document.querySelectorAll(".game");
for (let gameDe of gamesDet) {
  $(gameDe).click(async function () {
    $(".loading-page").removeClass("d-none");
    $(window).ready(function () {
      $(".loading-page").addClass("d-none");
      $("body").css({ overflow: "visible" }, 1000);
    });
    $(".gameDetails").removeClass("d-none");
    $(".home-section").addClass("d-none");
    DG = new DetailsGame(gameDe.getAttribute("data-id"));

    response = await DG.getDetails();

    infoGame = displayDetails(response);

    rowDet.innerHTML = infoGame;
  });
}

//==================Close Btn===================
$(".btn-close").click(function () {
  $(".gameDetails").addClass("d-none");
  $(".home-section").removeClass("d-none");
});

