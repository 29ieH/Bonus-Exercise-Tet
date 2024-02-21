function getValue(a,b,c){
    if(a===undefined)
        a = 3;
    if(b===undefined)
        b = 4;
    return a*b+c;
}
// Short
getValue1 = (a,b =3, c = 4);