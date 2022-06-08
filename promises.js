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

async function waitingForGodot() {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("You just missed him!");
		}, 10000);
	});

	const result = await promise;
	console.log("Oh no!", result);
}
waitingForGodot();
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
