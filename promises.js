/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// function num1() {
// 	return 1;
// }
// async function num2() {
// 	return "x";
// }

// console.log("num1", num1());
// num2().then((res) => console.log(res));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// async function waiting() {
// 	const value = await num2();
// 	console.log("waiting", value);
// }

// waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// async function waitingForGodot() {
// 	const promise = new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("You just missed him!");
// 		}, 10000);
// 	});

// 	const result = await promise;
// 	console.log("Oh no!", result);
// }
// waitingForGodot();
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
    // new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve("Whatever we want.");
    //     }, 2438);
    // }).then(anything => console.log("Whatever YOU want.", anything));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

async function huh() {
    await wait(2499)
    console.log("Any message you want.")
}

huh();

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

function monogamy(randVal){
    new Promise((resolve, reject) => {
        if(randVal > .5){
            resolve("happily ever after");
        } else {
            reject("til death do us part *cocks shotgun*");
        }
    });
}

for (let i = 1; i < 10; i++){
    const rand = Math.random();
    wait(2000 + rand*1000).then(() => monogamy(rand)).then((result) => {
            console.log(`${i}th marriage: ${result}`);
        }).catch(err => console.err(`Error: Marriage Failed`, err))
};

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
