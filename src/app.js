//problema 10 IPV4
function ipv4(a) {
    var df = "";
    var fd = 0;
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(0) != "." && parseInt(a.charAt(0)) != 0) {
            if (a.charAt(i) != ".") {
                df = df + a.charAt(i);
            }
            else {
                fd = parseInt(df);
                if (fd <= 255 && fd >= 0) {
                    df = "";
                    fd = 0;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(ipv4(".16.254.0"));
