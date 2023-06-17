function rot13(a) {
  return a.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) 
                               ? c : c - 26);
  })
};

window.onload = function(e) {
    var element = document.getElementById('email');
    var s = rot13('zbbx.r@abegurnfgrea.rqh');
    element.innerHTML = s;
};
