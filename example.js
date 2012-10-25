var channel = null;

function connect() {
    var client = {
        connect: function() { 
            alert("connected! :)");
        }
    };
    return new IMO.Channel(client);
}

window.onload = function() {
    channel = connect();
};