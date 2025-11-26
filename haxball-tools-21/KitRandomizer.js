// Day 21/60 - Kit Randomizer
// By TLS/Teleese


function normColors(arr) {
  let c = Array.isArray(arr) ? arr.slice() : [];
  if (c.length === 0) c = [0xFFFFFF];
  while (c.length < 4) c.push(c[c.length - 1]);
  return c.slice(0, 4);
}
function randIndex(n) { return Math.floor(Math.random() * n); }

const kits = [
  { name: "Real Madrid Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xDEDEDE,0xFFFFFF] },
  { name: "Real Madrid Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x9E49B8,0xDB65FF,0x9E49B8] },
  { name: "Real Madrid Alternativa", angle: 0, textColor: 0xFFFFFF, colors: [0x34B526,0x000000,0x1C1C1C,0x000000] },

  { name: "Barcelona Local", angle: 0, textColor: 0xFFCA61, colors: [0xFFCA61,0x050530,0x1919D4,0xBF0000] },
  { name: "Barcelona Suplente", angle: 0, textColor: 0x060638, colors: [0x060638,0xFFCA61,0xD6AA51,0xFFCA61] },
  { name: "Barcelona Alternativa", angle: 0, textColor: 0xD4D4D4, colors: [0xD4D4D4,0xFFF5FD,0x1B1BFA,0xFFFFFF] },
  { name: "Barcelona Cuarta", angle: 90, textColor: 0xFCF5FB, colors: [0xFCF5FB,0xFFE017,0xFA0000,0xFFE017] },

  { name: "Atletico Madrid Local", angle: 0, textColor: 0xFFFFFF, colors: [0x2323FC,0xFFFFFF,0xFA0000,0xFFFFFF] },
  { name: "Atletico Madrid Suplente", angle: 0, textColor: 0x2323FC, colors: [0x2323FC,0x000000,0x000000,0x000000] },
  { name: "Atletico Madrid Alternativa", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFB452,0xFFB452,0xFFB452] },

  { name: "Sevilla Local", angle: 0, textColor: 0x000000, colors: [0xFF1717,0xF0F0F0,0xFAFAFA,0xE6E6E6] },
  { name: "Sevilla Suplente", angle: 0, textColor: 0xD91C5B, colors: [0xD91C5B,0x000000,0x000000,0x000000] },
  { name: "Sevilla Alternativa", angle: 90, textColor: 0xFEFAFF, colors: [0xFEFAFF,0xFF1414,0xDE2323,0xC40F0F] },

  { name: "Real Sociedad Local", angle: 0, textColor: 0xFFFFFF, colors: [0x06032B,0xFFFFFF,0x1610DE,0xFFFFFF] },
  { name: "Real Sociedad Suplente", angle: 90, textColor: 0x150B99, colors: [0x150B99,0x0A0A0A,0x171717,0x000000] },
  { name: "Real Sociedad Suplente Dorsal Blanco", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x0A0A0A,0x171717,0x000000] },
  { name: "Real Sociedad Alternativa", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF760D,0xFF760D,0xFF760D] },

  { name: "Athletic Club Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFF0A0A,0xFFFFFF] },
  { name: "Athletic Club Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x000000,0x470B0B,0x171717] },

  { name: "Real Betis Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0x25961D,0xFFFFFF] },
  { name: "Real Betis Suplente", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x2229FF,0x0A0E47,0x2229FF] },
  { name: "Real Betis Alternativa", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFFA724,0xFF951C,0xFF951C] },

  { name: "Osasuna Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xAB0505,0xAB0505,0xAB0505] },
  { name: "Osasuna Suplente", angle: 90, textColor: 0xAB0C07, colors: [0xAB0C07,0x000000,0x000000,0x000000] },
  { name: "Osasuna Alternativa", angle: 90, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Villarreal Local", angle: 90, textColor: 0x090B3B, colors: [0x090B3B,0xFFF01C,0xFFF01C,0xFFF01C] },
  { name: "Villarreal Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x6C47FF,0x5B3CD6,0x6C47FF] },
  { name: "Villarreal Alternativa", angle: 0, textColor: 0xF8FF1F, colors: [0xF8FF1F,0x000000,0x000000,0x000000] },

  { name: "Girona Local", angle: 90, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFF0000,0xFFFFFF] },
  { name: "Girona Suplente", angle: 0, textColor: 0x000000, colors: [0x000000,0xFF0000,0xFFF81F,0xFF0000] },
  { name: "Girona Alternativa", angle: 0, textColor: 0xFEFCFF, colors: [0xFEFCFF,0x617BA8,0x7493C9,0x617BA8] },

  { name: "Getafe Local", angle: 0, textColor: 0x1611A8, colors: [0x58FF2E,0x1611A8,0x1611A8,0x1611A8] },
  { name: "Getafe Local Dorsal Blanco", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x1611A8,0x1611A8,0x1611A8] },
  { name: "Getafe Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xD60024,0xFA002A,0xFA002A] },
  { name: "Getafe Alternativa", angle: 0, textColor: 0x0A4D1E, colors: [0x0A4D1E,0x21FF64,0x21FF64,0x21FF64] },

  { name: "Valencia Local", angle: 0, textColor: 0x010803, colors: [0x010803,0xFFFFFF,0xFFFFFF,0xFFFFFF] },
  { name: "Valencia Suplente", angle: 80, textColor: 0xFF8308, colors: [0xFF8308,0x030303,0x030000,0x080808] },
  { name: "Valencia Alternativa", angle: 0, textColor: 0x331CFF, colors: [0x331CFF,0xFF0000,0xFFE712,0xFF0000] },

  { name: "Elche Local", angle: 90, textColor: 0xFFFAFC, colors: [0xFFFAFC,0xFFFFFF,0x1A590D,0xFFFFFF] },
  { name: "Elche Suplente", angle: 90, textColor: 0xFFFAFC, colors: [0xFFFAFC,0x1A590D,0x1A590D,0x1A590D] },
  { name: "Elche Alternativa", angle: 90, textColor: 0xFFFAFC, colors: [0xFFFAFC,0x000000,0x000000,0x000000] },

  { name: "Rayo Vallecano Local", angle: 34, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xF20202,0xFFFFFF] },
  { name: "Rayo Vallecano Suplente", angle: 34, textColor: 0x000000, colors: [0x000000,0xF20202,0xFFFFFF,0xF20202] },
  { name: "Rayo Vallecano Alternativa", angle: 34, textColor: 0xFF70E7, colors: [0xFF70E7,0x000000,0xFFFFFF,0x030000] },

  { name: "Valladolid Local", angle: 0, textColor: 0xFF9F30, colors: [0xFF9F30,0x3D1169,0xFFFFFF,0x3D1169] },
  { name: "Valladolid Suplente", angle: 0, textColor: 0xFFC94D, colors: [0xFFC94D,0x561894,0x3D1169,0x3D1169] },
  { name: "Valladolid Alternativa", angle: 90, textColor: 0xFFC94D, colors: [0xFFC94D,0x561894,0xFFFFFF,0xFFFFFF] },

  { name: "Espanyol Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0x1F26FF,0xFFFFFF] },
  { name: "Espanyol Suplente", angle: 0, textColor: 0x000000, colors: [0x000000,0xFF24FF,0xFF24FF,0xFF24FF] },
  { name: "Espanyol Alternativa", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0x1F26FF,0x1F26FF] },

  { name: "Almería Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFF0000,0xFFFFFF] },
  { name: "Almería Suplente", angle: 56, textColor: 0x2EDBFF, colors: [0x2EDBFF,0x000000,0x061A1F,0x209AB3] },
  { name: "Almería Alternativa", angle: 90, textColor: 0x000000, colors: [0x000000,0xFFBC57,0xFFBC57,0xE3A74D] },

  { name: "Cádiz Local", angle: 90, textColor: 0x1F2EFF, colors: [0x1F2EFF,0xFFF019,0xFFF019,0xFFF019] },
  { name: "Cádiz Suplente", angle: 90, textColor: 0xF7FF17, colors: [0xF7FF17,0x000000,0x000000,0x000000] },

  { name: "Mallorca Local", angle: 34, textColor: 0xFEFAFF, colors: [0xFEFAFF,0x000000,0xA10505,0x000000] },
  { name: "Mallorca Suplente", angle: 34, textColor: 0xFF0000, colors: [0xFF0000,0x000000,0x1C1C1C,0x000000] },

  { name: "Flamengo Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xC90202,0x1F1F1F,0xC90202] },
  { name: "Flamengo Suplente", angle: 90, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xC90202,0xFFFFFF] },

  { name: "Palmeiras Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x0E6E12,0x10400A,0x118516] },
  { name: "Palmeiras Suplente", angle: -34, textColor: 0x72FF21, colors: [0x72FF21,0xFFFFFF,0x185E0F,0xFFFFFF] },

  { name: "Santos Local", angle: -34, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },
  { name: "Santos Suplente", angle: 0, textColor: 0xFFE926, colors: [0xFFE926,0xFFFFFF,0x000000,0xFFFFFF] },

  { name: "São Paulo Local", angle: 90, textColor: 0x000000, colors: [0x000000,0x000000,0xFFFFFF,0xFFFFFF] },
  { name: "São Paulo Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x000000,0xFF0000,0x000000] },

  { name: "Fluminense Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x2C612B,0xFF3333,0x2C612B] },
  { name: "Fluminense Suplente", angle: 90, textColor: 0xFF1F1F, colors: [0xFF1F1F,0x2C612B,0xFFFFFF,0xFFFFFF] },

  { name: "Internacional Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0303,0xFF0303,0xFF0303] },
  { name: "Internacional Suplente", angle: 47, textColor: 0xFF0000, colors: [0xFF0000,0xFFFFFF,0xAB0000,0xFFFFFF] },

  { name: "Atlético Mineiro Local", angle: 0, textColor: 0xFFFFFF, colors: [0xD1D1D1,0xFFFFFF,0x000000,0xFFFFFF] },
  { name: "Atlético Mineiro Suplente", angle: 90, textColor: 0x000000, colors: [0x000000,0x8F8F8F,0xFFFFFF,0xFFFFFF] },

  { name: "Athletico Paranaense Local", angle: 46, textColor: 0xFFFFFF, colors: [0x000000,0xFF0000,0xFF0000,0x000000] },
  { name: "Athletico Paranaense Suplente", angle: 46, textColor: 0xFFFFFF, colors: [0x000000,0x2BC0FF,0x2BC0FF,0x000000] },
  { name: "Athletico Paranaense Alternativa", angle: 46, textColor: 0xFF0808, colors: [0xFF0808,0x000000,0x000000,0xFF0808] },

  { name: "Fortaleza Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0808,0x2B1CFF,0xFF0808] },
  { name: "Fortaleza Suplente", angle: 45, textColor: 0xFFFFFF, colors: [0xFF0505,0xFFFFFF,0x2B1CFF,0xFFFFFF] },

  { name: "Grêmio Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x000000,0x1499FF,0x000000] },
  { name: "Grêmio Suplente", angle: 0, textColor: 0x3B2B2C, colors: [0x3B2B2C,0xEBEBEB,0xEBEBEB,0xEBEBEB] },

  { name: "RB Bragantino Local", angle: 50, textColor: 0xFF0303, colors: [0xFF0303,0xFFFFFF,0xBFBFBF,0xFFFFFF] },
  { name: "RB Bragantino Suplente", angle: 50, textColor: 0xFFAE0D, colors: [0xFFAE0D,0xFF0303,0x6B0000,0xFF0303] },

  { name: "Corinthians Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },
  { name: "Corinthians Suplente", angle: 0, textColor: 0x000000, colors: [0x000000,0x000000,0xFFFFFF,0x000000] },

  { name: "Qatar Local", angle: 60, textColor: 0xA82D2D, colors: [0xFFFFFF,0xA82D2D,0xA82D2D,0xA82D2D] },
  { name: "Qatar Suplente", angle: 60, textColor: 0xC73434, colors: [0xC73434,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Holanda Local", angle: 0, textColor: 0x0D0D40, colors: [0x0D0D40,0xFF9124,0xFFAE0D,0xFF9124] },
  { name: "Holanda Suplente", angle: 0, textColor: 0x000000, colors: [0x000000,0x0D0D40,0x0F0F4A,0x0D0D40] },

  { name: "Ecuador Local", angle: 90, textColor: 0x0A0838, colors: [0x0A0838,0xFFFF21,0xFFF708,0xFFFF21] },
  { name: "Ecuador Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x0F0C57,0x0A0838,0x0F0C57] },

  { name: "Senegal Local", angle: 90, textColor: 0x289620, colors: [0xE8FF17,0xFFFF29,0xFFFFFF,0xFFFFFF] },
  { name: "Senegal Suplente", angle: 0, textColor: 0x27A33C, colors: [0xF8FF30,0x27A33C,0x104519,0x27A33C] },

  { name: "Inglaterra Local A", angle: 90, textColor: 0x151AA1, colors: [0x151AA1,0x151AA1,0xFFFFFF,0xFFFFFF] },
  { name: "Inglaterra Local B", angle: 0, textColor: 0x151AA1, colors: [0x151AA1,0xFFFFFF,0xF0F0F0,0xFFFFFF] },
  { name: "Inglaterra Suplente", angle: 0, textColor: 0x1FB4FF, colors: [0x1FB4FF,0xFF1717,0xE01414,0xFF1717] },

  { name: "Estados Unidos Local", angle: 0, textColor: 0x081045, colors: [0x081045,0xFFFFFF,0xE8E8E8,0xFFFFFF] },
  { name: "Estados Unidos Suplente", angle: 0, textColor: 0xDE1818, colors: [0xDE1818,0x0E0A4A,0x0A0733,0x0E0A4A] },

  { name: "Gales Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF2212,0xFF4F0F,0xFF2212] },
  { name: "Gales Suplente", angle: 0, textColor: 0xFF2212, colors: [0xFF2212,0xFFFFFF,0xF0F0F0,0xFFFFFF] },

  { name: "Irán Local", angle: 0, textColor: 0x13450B, colors: [0x13450B,0xFFFFFF,0xF0F0F0,0xFFFFFF] },
  { name: "Irán Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0000,0xD90000,0xFF0000] },

  { name: "Argentina Local", angle: 0, textColor: 0xFFFFFF, colors: [0x000000,0xFFFFFf,0x3BA3FF,0xFFFFFF] },
  { name: "Argentina Suplente", angle: 0, textColor: 0xDEDEDE, colors: [0xDEDEDE,0x6E219C,0x8528BD,0x6E219C] },

  { name: "Polonia Local", angle: 0, textColor: 0xFF0000, colors: [0xFF0000,0xFFFFFF,0xE8EBEA,0xFFFFFF] },
  { name: "Polonia Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0000,0xEB0505,0xFF1100] },

  { name: "México Local A", angle: 90, textColor: 0x154D15, colors: [0xFFFFFF,0x154D15,0x1D691D,0x278F27] },
  { name: "México Suplente", angle: 0, textColor: 0xFF968F, colors: [0xFF968F,0xFFFFFF,0xFFDEDE,0xFFFFFF] },

  { name: "Arabia Saudita Local", angle: 0, textColor: 0x1F660D, colors: [0xFFFFFF,0x1F660D,0x2B8C12,0x1F660D] },
  { name: "Arabia Saudita Suplente", angle: 0, textColor: 0x28A31F, colors: [0x28A31F,0xFFFFFF,0xE6E6E6,0xFFFFFF] },

  { name: "Francia Local", angle: 0, textColor: 0xE8B320, colors: [0xE8B320,0x0F0D4D,0x0F0D4D,0x0F0D4D] },
  { name: "Francia Suplente", angle: 0, textColor: 0x1E1EA6, colors: [0x1E1EA6,0xBFBFBF,0xE6E6E6,0xFFFFFF] },

  { name: "Australia Local", angle: 0, textColor: 0x107813, colors: [0x107813,0xFFD21F,0xFFFF12,0xFFD21F] },
  { name: "Australia Suplente", angle: 0, textColor: 0x18C1C7, colors: [0x18C1C7,0x100E3D,0x100E3D,0x100E3D] },

  { name: "Dinamarca Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xF00000,0xCC0000,0xF00000] },
  { name: "Dinamarca Suplente", angle: 0, textColor: 0xB80909, colors: [0xB80909,0xFFFFFF,0xE6DCE2,0xFFFFFF] },

  { name: "Túnez Local", angle: 0, textColor: 0xFFFEF0, colors: [0xFFFEF0,0xFF0000,0xDB0000,0xFF0000] },
  { name: "Túnez Suplente", angle: 0, textColor: 0xFF0000, colors: [0xFF0000,0xFFFFFF,0xDBDBDB,0xFFFFFF] },

  { name: "España Local (Mundial)", angle: 0, textColor: 0xEBC015, colors: [0xEBC015,0xBF0000,0xBF0000,0xBF0000] },
  { name: "España Suplente (Mundial)", angle: 0, textColor: 0x1783FF, colors: [0x1783FF,0xBFBFBF,0xDBDBDB,0xFFFFFF] },

  { name: "Alemania Local (Mundial)", angle: 0, textColor: 0xFFC629, colors: [0xFFC629,0xFFFFFF,0x000000,0xFFFFFF] },
  { name: "Alemania Suplente (Mundial)", angle: 0, textColor: 0xFFC640, colors: [0xFFC640,0x000000,0x3B0404,0x000000] },

  { name: "Japón Local", angle: 30, textColor: 0xF2F2F2, colors: [0xF2F2F2,0x1930FF,0x0066FF,0x101FA3] },
  { name: "Japón Suplente", angle: 30, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Costa Rica Local", angle: 30, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0000,0xFF0000,0xFFFFFF] },
  { name: "Costa Rica Suplente", angle: 30, textColor: 0x000000, colors: [0x000000,0xEBE6FF,0xEBE6FF,0xEBE6FF] },

  { name: "Croacia Local", angle: 0, textColor: 0x3A33FF, colors: [0x3A33FF,0xEBE6FF,0xDBDBDB,0xFFFFFF] },
  { name: "Croacia Suplente", angle: -430, textColor: 0xFF0000, colors: [0xFF0000,0x080D38,0x080D38,0x1251FF] },

  { name: "Bélgica Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFF150D,0xBD100A,0xFF150D] },
  { name: "Bélgica Suplente", angle: 0, textColor: 0xFF1919, colors: [0xFF1919,0xFFFFFF,0xE6E6E6,0xFFFFFF] },

  { name: "Marruecos Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x046317,0xFF0000,0xFF0000] },
  { name: "Marruecos Suplente", angle: 0, textColor: 0x18630C, colors: [0x18630C,0xFFFFFF,0xBFBFBF,0xFFFFFF] },

  { name: "Canadá Local", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF1717,0xFF1717,0xFF1717] },
  { name: "Canadá Suplente", angle: 0, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Brasil Local (Mundial)", angle: 0, textColor: 0x167010, colors: [0x167010,0xFFFF26,0xF7FF19,0xFFFF26] },
  { name: "Brasil Local Dorsal Azul", angle: 0, textColor: 0x272CCC, colors: [0x272CCC,0xFFFF26,0xF7FF19,0xFFFF26] },
  { name: "Brasil Suplente Mundial", angle: 0, textColor: 0x6BFF54, colors: [0x6BFF54,0x211DA1,0x181573,0x211DA1] },

  { name: "Serbia Local", angle: 0, textColor: 0xFFBA30, colors: [0xFFBA30,0xE00404,0xCC0404,0xE00404] },
  { name: "Serbia Suplente", angle: 0, textColor: 0xFFBA30, colors: [0xFFBA30,0xFFFFFF,0xEDEDED,0xFFFFFF] },

  { name: "Suiza Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF1E1E,0xED1C1C,0xED1C1C] },
  { name: "Suiza Suplente", angle: 90, textColor: 0xFF1F1F, colors: [0xFF1F1F,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Camerún Local", angle: 0, textColor: 0xFFFF26, colors: [0xFFFF26,0x0D3808,0x18660F,0x0D3808] },
  { name: "Camerún Suplente", angle: 0, textColor: 0xFFF130, colors: [0xFFF130,0x0D3808,0xFFFFFF,0x0D3808] },

  { name: "Portugal Local", angle: -60, textColor: 0xFFCB21, colors: [0xFFCB21,0x0D3808,0xFF0D0D,0xFF0D0D] },
  { name: "Portugal Suplente", angle: 90, textColor: 0x0B0F4A, colors: [0x0B0F4A,0xFFFFFF,0xFF0D0D,0xFFFFFF] },

  { name: "Uruguay Local", angle: 0, textColor: 0xFABD16, colors: [0xFABD16,0x0091FF,0x007EDE,0x0091FF] },
  { name: "Uruguay Local Dorsal Blanco", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x0091FF,0x007EDE,0x0091FF] },
  { name: "Uruguay Suplente", angle: 0, textColor: 0xFFDA1F, colors: [0xFFDA1F,0xFFFFFF,0xE6E7ED,0xFFFFFF] },

  { name: "Corea del Sur Local", angle: 0, textColor: 0x000000, colors: [0x000000,0xFF2929,0xFF2929,0xFF2929] },
  { name: "Corea del Sur Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x000000,0x3D0B0B,0x4D420E] },
  { name: "Corea del Sur Suplente v2", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0x000000,0x3D0B0B,0x000000] },

  { name: "Ghana Local", angle: 0, textColor: 0xFFBD24, colors: [0xFFBD24,0xFFFFFF,0xD9D9D9,0xFFFFFF] },
  { name: "Ghana Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF1C1C,0xC71616,0xFF1C1C] },

  // ---- Sudamericanas extra ----
  { name: "Argentina Selección - Local (alterno)", angle: 0, textColor: 0xFFFFFF, colors: [0x000000,0xFFFAFF,0x3BA3FF,0xFFFFFF] },
  { name: "Argentina Selección - Suplente", angle: 90, textColor: 0xBDBDBD, colors: [0xBDBDBD,0x1F005E,0x2F008F,0x4400C9] },

  { name: "Brasil Selección - Local", angle: 90, textColor: 0x19FF5E, colors: [0x19FF5E,0xE8FF19,0xE8FF19,0xE8FF19] },
  { name: "Brasil Selección - Suplente", angle: 90, textColor: 0x19FF5E, colors: [0x19FF5E,0x2962FF,0x2962FF,0x2962FF] },
  { name: "Brasil Homenaje Vini Jr", angle: 90, textColor: 0xDAFF24, colors: [0xDAFF24,0x000000,0x000000,0x000000] },

  { name: "Uruguay Selección - Local", angle: 90, textColor: 0xFFC338, colors: [0xFFC338,0x0099FF,0x0099FF,0x0099FF] },
  { name: "Uruguay Selección - Suplente", angle: 90, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Chile Selección - Local", angle: 90, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF1303,0xFF1303,0xFF1303] },
  { name: "Chile Selección - Suplente", angle: 90, textColor: 0x1C49FF, colors: [0x1C49FF,0xFFFFFF,0xFFFFFF,0xFFFFFF] },

  { name: "Paraguay Selección - Local", angle: 0, textColor: 0x060F36, colors: [0x060F36,0xFFFFFF,0xF21313,0xFFFFFF] },
  { name: "Paraguay Selección - Suplente", angle: 0, textColor: 0xE6FFEC, colors: [0xE6FFEC,0x060F36,0x060F36,0x060F36] },

  { name: "Colombia Selección - Local", angle: 0, textColor: 0x09123B, colors: [0x09123B,0xFFF714,0xFFF714,0xFFF714] },
  { name: "Colombia Selección - Suplente", angle: 0, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xFF0000,0x990000,0x4D0000] },

  { name: "Perú Selección - Local", angle: 44, textColor: 0x000000, colors: [0x000000,0xFFFFFF,0xFF0000,0xFBF5FF] },
  { name: "Perú Selección - Suplente", angle: 44, textColor: 0xFFFFFF, colors: [0xFFFFFF,0xBF0000,0xFF0000,0xBF0000] },

  { name: "Ecuador Selección - Local", angle: 90, textColor: 0x0C0D33, colors: [0x0C0D33,0xFFFF3B,0xEDED37,0xFFFF3B] },
  { name: "Ecuador Selección - Suplente", angle: 0, textColor: 0xF5FAFF, colors: [0xF5FAFF,0x192991,0x16237D,0x192991] },

  { name: "Bolivia Selección - Local", angle: 0, textColor: 0xF5FAFF, colors: [0xF5FAFF,0x41C44E,0x41C44E,0x41C44E] },
  { name: "Bolivia Selección - Suplente", angle: 0, textColor: 0xF5FAFF, colors: [0xF5FAFF,0xFF1F1F,0xFF1F1F,0xFF1F1F] },

  { name: "Venezuela Selección - Local", angle: 0, textColor: 0xF5FAFF, colors: [0xF5FAFF,0x801010,0x801010,0x801010] },
  { name: "Venezuela Selección - Suplente", angle: 0, textColor: 0x6E0E0E, colors: [0x6E0E0E,0xFFFFFF,0xFFFFFF,0xFFFFFF] },
];


function pickTwoDifferent() {
  const i1 = randIndex(kits.length);
  let i2 = randIndex(kits.length);
  while (i2 === i1) i2 = randIndex(kits.length);
  return [kits[i1], kits[i2]];
}

function applyRandomMatch(byPlayer) {
  const [k1, k2] = pickTwoDifferent();

  const colors1 = normColors(k1.colors);
  const colors2 = normColors(k2.colors);

  try {
    room.setTeamColors(1, k1.angle || 0, k1.textColor || 0xFFFFFF, colors1);
    room.setTeamColors(2, k2.angle || 0, k2.textColor || 0xFFFFFF, colors2);
  } catch (e) {
    console.error("Error applying colors:", e);
  }

  const msg = `${k1.name} vs ${k2.name}`;
  room.sendChat("🎨 " + msg);
  room.sendAnnouncement(msg, null, 0xFFFFFF, "bold", 1);
  return { red: k1, blue: k2 };
}

room.onPlayerChat = function(player, message) {
  const msg = (message || "").toLowerCase().trim();

  if (msg === "!smart") {
    applyRandomMatch(player);
    return false; 
  }


  if (msg === "!match") {
    const r = applyRandomMatch(player);
    return false;
  }
};

room.onGameStart = function(byPlayer) {
  applyRandomMatch(byPlayer);
};

