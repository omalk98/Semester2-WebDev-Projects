function troll(){
    alert("Sorry, but you have been RickRolled! :)");
}

function getTime(){
    var x = new Date(document.lastModified).toLocaleString({ hour12: true });
    document.writeln("This Page was Last Updated on: " + x);
}