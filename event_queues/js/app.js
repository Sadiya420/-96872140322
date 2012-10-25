(function() {
  var channel, chat, connect;

  channel = null;

  connect = function() {
    var client;
    client = {
      connect: function() {
        return null;
      },
      event_queue: function(name, event) {
        if (name === "chat" && event.object.message) {
          return alert(event.object.message);
        }
      }
    };
    return new IMO.Channel(client);
  };

  chat = function(ch, msg) {
    return ch.event_queue("chat", {
      "object": {
        "message": String(msg)
      }
    });
  };

  window.onload = function() {
    channel = connect();
    channel.subscribe([
      {
        "type": "event_queue",
        "name": "chat"
      }
    ], 0);
    return chat(channel, "hey!");
  };

}).call(this);
