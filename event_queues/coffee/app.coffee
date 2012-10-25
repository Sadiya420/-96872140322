channel = null

connect = () ->
  client = {
    connect: ->
      null
    event_queue: (name, event) ->
      if name is "chat" and event.object.message
        alert event.object.message
  }
  new IMO.Channel client

# send chat event with msg to queue using given channel ch
chat = (ch, msg) ->
  ch.event_queue "chat", 
                 {"object": {"message": String(msg)}}

window.onload = ->
  channel = connect()

  channel.subscribe([{"type": "event_queue", "name": "chat"}], 0)

  chat channel, "hey!"
