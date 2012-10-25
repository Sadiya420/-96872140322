channel = null

connect = () ->
  client = {
    connect: ->
      alert "you just connected!"
      null
  }
  new IMO.Channel client

window.onload = ->
  channel = connect()