//  W.A.P to find a star pattern like

var i;
for (i = 1; i <= 5; i++) {
    let j,n = '';
    for (j = 0; j < i; j++) {
        n += '*';
    }
    console.log(n);
}

var a;
for (a = 5; a > 0; a--) {
    var b, c = '';
    for (b = 0; b < a; b++) {
        c += '*';
    }
    console.log(c);
}