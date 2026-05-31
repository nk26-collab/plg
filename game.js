const hero = {
    level:1,
    hp:100,
    maxHp:100,
    gold:0,
    potions:3
};

let party = [
    {
        name:"🐱ニャルン",
        atk:8
    }
];

function log(text){

    const logBox =
    document.getElementById("log");

    logBox.innerHTML +=
    text + "<br>";

    logBox.scrollTop =
    logBox.scrollHeight;
}

function update(){

    document.getElementById("status")
    .innerHTML =

    `
    ❤️ ${hero.hp}/${hero.maxHp}
    ⭐ Lv.${hero.level}
    💰 ${hero.gold}
    🧪 ${hero.potions}

    <br><br>

    👥 ${party.map(
    m=>m.name
    ).join(" ")}
    `;
}

function saveGame(){

    localStorage.setItem(
    "shinju_save",
    JSON.stringify({
        hero,
        party
    })
    );

    log("💾 セーブした！");
}

function loadGame(){

    const data =
    localStorage.getItem(
    "shinju_save"
    );

    if(!data) return;

    const save =
    JSON.parse(data);

    Object.assign(
    hero,
    save.hero
    );

    party = save.party;

    log("📂 ロードした！");
}

loadGame();
update();
