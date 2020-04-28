require('uWebSockets.js').App()
.any('/', (res, req) => {
    res.end(
        'I am Chuck Norris!!!\n' +
        '                                          MMMMMMMMMMM\n' +
        '                                       MMMMMMMMMMMMMMMMM\n' +
        '                                   NMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                                MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                                MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMD\n' +
        '                              DMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '      NM                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '      MMMMM              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '        MMMMMMMMMMMMMMMMMMMMMMMMMM8MMMMMMMMMIMMMMM8,. ...........OMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '           MMMMMMMMMMMMMMMMMMMMMMM ..N. .....~MMMM...............:MMMMNMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '             NMMMMMMMMMMMMMMMMMMMMM.....:..DMMMMMNZ Z.... .......M$MMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                 MMMMMMMMMMNMMMMMMM....... 7=MMMMMMO....Z .......MM7MMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                    MMMMMMMMMMMMMMMMM  Z...MMMZ .. .,M..,........MMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                        MMMMMM.......DOM ....N7..................MMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                           MMM....... M. ... .  ... ..............M...$MMMMMMMMMMMMMMMMMMMM\n' +
        '                             ........... ........~. ..............M..=....+MMMMMMMMMMMMMM\n' +
        '                             ......+.NMI~........ . ..............M.,.I...MMMMMMMMMMMMMMN\n' +
        '                             ......$... ...... O..................,.....$MMMMMMMMMMMMN\n' +
        '                             .....M.......... M M.. .............. 8  .OMMMMMMMMMMMN\n' +
        '                              ..=7I,,.,,IMI...M.................. ..MMMMMMMMMMM\n' +
        '                              ....DMMMMMMMMMMMMMMMO..............D...MMMMMMMMM\n' +
        '                               .MMMMMMMMMMMMMMDDMM:,N..............DMMMMMMMMMMM\n' +
        '                               NMMMMMNMM8 . .... ...,~............  MMMMMMMMM\n' +
        '                               MMMMM,:......::~..M8M8MM...............MMMMMM\n' +
        '                               MMMM ... . .........,MM..............MMMMMO$\n' +
        '                               MMMMM... =.=. .. . . MM ....... . ...MMMMMMM\n' +
        '                                NMMMMMMMMMM?  ..O.?NM7 ....... ......MMMMMM\n' +
        '                                 NMMMMMMMMMMMMMMMMM........  $ . ...MMMNMMM\n' +
        '                                  MMMMMMMMMMMMMMM.........,, ......MMMMMMMM\n' +
        '                                   OMMMMMMMM8 , .. .. .,N.... ...:MMMMMMMMMMN\n' +
        '                                    MMMMMMMM?N. ...~MD.:MNI8MMMMMMMMMMMMMMMMMN\n' +
        '                               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                            NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN\n' +
        '                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                    NMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n' +
        '                   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n');
}).listen(8000, (listenSocket) => {
    if (listenSocket) {
        console.log('Listening to port 8000');
    }
});