const {isWin}=require('./index');


test('Player win', () => {
    expect(isWin("ciseau","feuille")).toBe(true);
});
test('Player loose', () => {
    expect(isWin("pierre","feuille")).toBe(false);
});

test('Egalité', () => {
    expect(isWin("pierre","pierre")).toBe(null);
});


test('Mauvaise entrée', () => {
    expect(isWin("pier","pierre")).toBe(undefined);
});
test('Mauvaise 2', () => {
    expect(isWin("pier")).toBe(undefined);
});



