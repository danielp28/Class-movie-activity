
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


if ((!search) && (!term)) {
    search = "actor";
    term = "Ryan Gosling";
}
if (search === "actor") {
    console.log("Actor:", term)
}
else if (search === "show") {
    console.log("Show:", term)
}