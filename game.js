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

// ====================
// マップ
// ====================

function map(){

    update();

    document.getElementById(
    "scene"
    ).innerHTML="🗺️";

    document.getElementById(
    "buttons"
    ).innerHTML=`

    <button onclick="forest()">
    🌲 森
    </button>

    <button onclick="mountain()">
    ⛰️ 山
    </button>

    <button onclick="pharmacy()">
    💊 薬屋
    </button>

    <button onclick="shop()">
    🏪 ショップ
    </button>

    <button onclick="saveGame()">
    💾 セーブ
    </button>

    `;
}

// ====================
// 森
// ====================

function forest(){

    document.getElementById(
    "scene"
    ).innerHTML="🌲";

    log("🌲 森へ入った");
    log("🐺 ウルファが現れた！");

    hero.gold += 10;

    log("🎉 勝利！");
    log("💰 10G 手に入れた");

    update();

    document.getElementById(
    "buttons"
    ).innerHTML=`

    <button onclick="map()">
    🗺️ マップへ戻る
    </button>

    `;
}

// ====================
// 山
// ====================

function mountain(){

    document.getElementById(
    "scene"
    ).innerHTML="⛰️";

    log("⛰️ 山へ入った");
    log("🦅 ホークンが現れた！");

    hero.gold += 20;

    log("🎉 勝利！");
    log("💰 20G 手に入れた");

    update();

    document.getElementById(
    "buttons"
    ).innerHTML=`

    <button onclick="map()">
    🗺️ マップへ戻る
    </button>

    `;
}

// ====================
// 薬屋
// ====================

function pharmacy(){

    document.getElementById(
    "scene"
    ).innerHTML="💊";

    document.getElementById(
    "buttons"
    ).innerHTML=`

    <button onclick="buyPotion()">
    🧪 やくそう
    20G
    </button>

    <button onclick="buySuperPotion()">
    💊 スーパーやくそう
    50G
    </button>

    <button onclick="map()">
    🗺️ 戻る
    </button>

    `;

    log("💊 薬屋へようこそ！");
}

function buyPotion(){

    if(hero.gold < 20){

        log("❌ お金が足りない");

        return;
    }

    hero.gold -= 20;
    hero.potions++;

    update();

    log("🧪 やくそうを買った");
}

function buySuperPotion(){

    if(hero.gold < 50){

        log("❌ お金が足りない");

        return;
    }

    hero.gold -= 50;

    hero.hp =
    hero.maxHp;

    update();

    log("💊 HP全回復！");
}

// ====================
// ショップ
// ====================

function shop(){

    document.getElementById(
    "scene"
    ).innerHTML="🏪";

    document.getElementById(
    "buttons"
    ).innerHTML=`

    <button onclick="buySword()">
    ⚔️ 木の剣
    100G
    </button>

    <button onclick="map()">
    🗺️ 戻る
    </button>

    `;

    log("🏪 ショップへようこそ！");
}

function buySword(){

    if(hero.gold < 100){

        log("❌ お金が足りない");

        return;
    }

    hero.gold -= 100;

    party.forEach(mon=>{

        mon.atk += 3;

    });

    update();

    log("⚔️ 攻撃力アップ！");
}

// ====================
// ゲーム開始
// ====================

map();
