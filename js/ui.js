
export function displayGames(gamesArr) {
    let data = ``;
    for (let i = 0; i < gamesArr.length; i++) {
        data += `
        <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="game" data-id="${gamesArr[i].id}">
                    <div class="inner p-3 pb-0 border border-1 border-black border-opacity-25 rounded-top-2 ">
                        <div class=" text-center text-white rounded rounded-2">
                            <img src="${gamesArr[i].thumbnail}" class="w-100 rounded-top-2" alt="...">

                            <div class="mt-3 d-flex justify-content-between align-items-center">
                                <span class="game-name text-start"> ${gamesArr[i].title}</span>
                                <span class="badge text-bg-primary">Free</span>
                            </div>
                            <p class="describtion mt-3 text-white-50">${gamesArr[i].short_description.substring(0,55)}</p>
                        </div>
                    </div>
                    <div
                        class=" d-flex justify-content-between px-3 py-2 border border-1 border-black border-opacity-25 border-top-0 text-capitalize rounded-bottom-2">
                        <span class="type badge text-white bg-grey ">${gamesArr[i].genre}</span>
                        <span class="platform badge text-white bg-grey">${gamesArr[i].platform}</span>
                    </div>
                </div>
            </div>
        `;
    }
    return data;
}
export function allData(arr) {
    let data = ``;
    for (let i = 0; i < arr.length; i++) {
        data += `
        <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="game" data-id="${arr[i].id}">
                    <div class="inner p-3 pb-0 border border-1 border-black border-opacity-25 rounded-top-2 ">
                        <div class=" text-center text-white rounded rounded-2">
                            <img src="${arr[i].thumbnail}" class="w-100 rounded-top-2" alt="...">

                            <div class="mt-3 d-flex justify-content-between align-items-center">
                                <span class="game-name text-start"> ${arr[i].title}</span>
                                <span class="badge text-bg-primary">Free</span>
                            </div>
                            <p class="describtion mt-3 text-white-50">${arr[i].short_description.substring(0,55)}</p>
                        </div>
                    </div>
                    <div
                        class=" d-flex justify-content-between px-3 py-2 border border-1 border-black border-opacity-25 border-top-0 text-capitalize rounded-bottom-2">
                        <span class="type badge text-white bg-grey ">${arr[i].genre}</span>
                        <span class="platform badge text-white bg-grey">${arr[i].platform}</span>
                    </div>
                </div>
            </div>
        `;
    }
    return data;
}
export function displayDetails(game) {
    let details =`
     <div class="col-md-4">
                    <div class="img-div w-100">
                        <img src="${game.thumbnail}" class="w-100" alt="game photo">
                    </div>

                </div>
                <div class="col-md-8">
                    <div class="details ps-2">
                        <h3 class="text-capitalize">title: ${game.title}</h3>
                        <p class="text-capitalize">category: <span class="game-category badge text-bg-badge">${game.genre}</span></p>
                        <p class="text-capitalize">platform: <span class="game-platform badge text-bg-badge">${game.platform}</span></p>
                        <p class="text-capitalize">status: <span class="game-status badge text-bg-badge">${game.status}</span></p>
                        <p class="game-descreption">${game.description}</p>
                        <a href="${game.game_url}" target="_blank" class="btn text-white btn-outline-warning">Show Game</a>
                    </div>
                </div>
    `;
    return details;
}

