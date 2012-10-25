(function() {
  var channel, connect;

  channel = null;

  connect = function() {
    var client;
    client = {
      connect: function() {
        alert("you just connected!");
        return null;
      }
    };
    return new IMO.Channel(client);
  };

  window.onload = function() {
    return channel = connect();
  };

}).call(this);
