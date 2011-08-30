toggleJSCS (id) ->
  if (document.getElementById("#{id}_JS").style.display is "block")
    document.getElementById(id + "_JS").style.display = "none"
  else
    document.getElementById(id).style.display = "block"