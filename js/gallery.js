
var slideIndex = 1;



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  

  var images=['1.jpg', '2.jpg', '3.jpg', '9.jpg', 'RES_20190628_152514.jpg', 'RES_20190628_152828.jpg', 'RES_20190629_182623.jpg', 'RES_20190629_195321.jpg', 'RES_20190629_195557.jpg', 'RES_20190630_165945.jpg', 'RES_20190630_170119.jpg', 'RES_20190630_170446.jpg', 'RES_20190630_173922.jpg', 'RES_20190630_174533.jpg', 'RES_20190701_184943.jpg', 'RES_20190701_185032.jpg', 'RES_20190701_185209.jpg', 'RES_20190701_185430.jpg', 'RES_20190701_190045.jpg', 'RES_20190701_190204.jpg', 'RES_20190701_190347.jpg', 'RES_20190701_193836.jpg', 'RES_20190701_194914.jpg', 'RES_20190702_143103.jpg', 'RES_20190702_214231.jpg', 'RES_20190708_175935.jpg', 'RES_20190708_180006.jpg', 'RES_20190708_180026.jpg', 'RES_20190708_180045.jpg', 'RES_20190708_180110.jpg', 'RES_20190708_183849.jpg', 'RES_20190708_183925.jpg', 'RES_20190708_192245.jpg', 'RES_20190709_164920.jpg', 'RES_20190709_165101.jpg', 'RES_20190709_165835.jpg', 'RES_20190709_170112.jpg', 'RES_20190709_170215.jpg', 'RES_20190709_170505.jpg', 'RES_20190709_171423.jpg', 'RES_20190709_171533.jpg', 'RES_20190709_172135.jpg', 'RES_20190709_172443.jpg', 'RES_20190709_172655.jpg', 'RES_20190709_173023.jpg', 'RES_20190709_173419.jpg', 'RES_20190714_155414.jpg', 'RES_20190715_174109.jpg', 'RES_20190715_180046.jpg', 'RES_20190715_182623.jpg', 'RES_20190715_182729.jpg', 'RES_20190715_183453.jpg', 'RES_20190715_185718.jpg', 'RES_20190715_210153.jpg', 'RES_20190715_210240.jpg', 'RES_20190715_210309.jpg', 'RES_20190715_210435.jpg', 'RES_20190715_210903.jpg', 'RES_20190715_210930.jpg', 'RES_20190715_211025.jpg', 'RES_20190715_211122.jpg', 'RES_20190715_211200.jpg', 'RES_20190715_211257.jpg', 'RES_20190715_211535.jpg', 'RES_20190715_211555.jpg', 'RES_20190715_211659.jpg', 'RES_20190715_211716.jpg', 'RES_20190715_211737.jpg', 'RES_20190715_211800.jpg', 'RES_20190715_211859.jpg', 'RES_20190715_211923.jpg', 'RES_20190715_211948.jpg', 'RES_20190715_212143.jpg', 'RES_20190715_212203.jpg', 'RES_20190715_212250.jpg', 'RES_20190716_195824.jpg', 'RES_20190716_195906.jpg', 'RES_20190717_133609.jpg', 'RES_20190717_133734.jpg', 'RES_20190717_133818.jpg', 'RES_20190717_134805.jpg', 'RES_20190717_134815.jpg', 'RES_20190717_134900.jpg', 'RES_20190717_134902.jpg', 'RES_20190721_151152.jpg', 'RES_20190721_151214.jpg', 'RES_20190721_151330.jpg', 'RES_20190721_151336.jpg', 'RES_20190721_203030.jpg', 'RES_20190721_203206.jpg', 'RES_20190721_203312.jpg', 'RES_20190721_203410.jpg', 'RES_20190721_203616.jpg', 'RES_20190721_203803.jpg', 'RES_20190721_204004.jpg', 'RES_20190721_204154.jpg', 'RES_20190721_204403.jpg', 'RES_20190721_204454.jpg', 'RES_20190721_204611.jpg', 'RES_20190721_204713.jpg', 'RES_20190721_204943.jpg', 'RES_20190721_205224.jpg', 'RES_20190721_205402.jpg', 'RES_20190721_205606.jpg', 'RES_20190721_205737.jpg', 'RES_20190721_205746.jpg', 'RES_20190721_210124.jpg', 'RES_20190721_210440.jpg', 'RES_20190721_210604.jpg', 'RES_20190721_210730.jpg', 'RES_20190721_211703.jpg', 'RES_20190721_211825.jpg', 'RES_20190721_211833.jpg', 'RES_20190721_212001.jpg', 'RES_20190721_212126.jpg', 'RES_20190721_212135.jpg', 'RES_20190721_212247.jpg', 'RES_20190721_212415.jpg', 'RES_20190721_212448.jpg', 'RES_20190721_212857.jpg', 'RES_20190721_212949.jpg', 'RES_20190721_212958.jpg', 'RES_20190721_213101.jpg', 'RES_20190721_213211.jpg', 'RES_20190721_213603.jpg', 'RES_20190721_215413.jpg', 'RES_20190721_220043.jpg', 'RES_20190721_220337.jpg', 'RES_20190721_220339.jpg', 'RES_20190721_220601.jpg', 'RES_20190721_220612.jpg', 'RES_20190721_221229.jpg', 'RES_20190721_221621.jpg', 'RES_20190721_222007.jpg', 'RES_20190721_222156.jpg', 'RES_20190721_222253.jpg', 'RES_20190721_222412.jpg', 'RES_20190721_222615.jpg', 'RES_20190724_135000.jpg', 'RES_20190724_135119.jpg', 'RES_20190724_135229.jpg', 'RES_20190724_135518.jpg', 'RES_20190724_135628.jpg', 'RES_20190724_135755.jpg', 'RES_20190724_135914.jpg', 'RES_20190724_140050.jpg', 'RES_20190724_140137.jpg', 'RES_20190724_140432.jpg', 'RES_20190724_140904.jpg', 'RES_20190724_141028.jpg', 'RES_20190724_141152.jpg', 'RES_20190724_141328.jpg', 'RES_20190724_141452.jpg', 'RES_20190724_141618.jpg', 'RES_20190724_141832.jpg', 'RES_20190724_142359.jpg', 'RES_20190724_142649.jpg', 'RES_20190724_142652.jpg', 'RES_20190724_143032.jpg', 'RES_20190724_143158.jpg', 'RES_20190724_143311.jpg', 'RES_20190724_143530.jpg', 'RES_20190724_143652.jpg', 'RES_20190724_143751.jpg', 'RES_20190724_144009.jpg', 'RES_20190724_144233.jpg', 'RES_20190724_144423.jpg', 'RES_20190724_144620.jpg', 'RES_20190724_144821.jpg', 'RES_20190724_144827.jpg', 'RES_20190724_144952.jpg', 'RES_20190724_145340.jpg', 'RES_20190724_145511.jpg', 'RES_20190724_145514.jpg', 'RES_20190724_145716.jpg', 'RES_20190724_145722.jpg', 'RES_20190724_150256.jpg', 'RES_20190724_150454.jpg', 'RES_20190724_150833.jpg', 'RES_20190724_150841.jpg', 'RES_20190724_151135.jpg', 'RES_20190727_154401.jpg', 'RES_20190727_154637.jpg', 'RES_20190727_171456.jpg', 'RES_20190727_171623.jpg', 'RES_20190727_172305.jpg', 'RES_20190727_172407.jpg', 'RES_20190727_172438.jpg', 'RES_20190727_172520.jpg', 'RES_20190727_172603.jpg', 'RES_20190727_180957.jpg', 'RES_20190727_181823.jpg', 'RES_20190727_181926.jpg', 'RES_20190727_181928.jpg', 'RES_20190727_182034.jpg', 'RES_20190727_182119.jpg', 'RES_20190727_182122.jpg', 'RES_20190727_182709.jpg', 'RES_20190727_183428.jpg', 'RES_20190727_183430.jpg', 'RES_20190729_170549.jpg', 'RES_20190729_170555.jpg', 'RES_20190729_170831.jpg', 'RES_20190729_170836.jpg', 'RES_20190729_174426.jpg', 'RES_20190729_174758.jpg', 'RES_20190729_180804.jpg', 'RES_20190729_180819.jpg', 'RES_20190729_180920.jpg', 'RES_20190729_180925.jpg', 'RES_20190729_181727.jpg', 'RES_20190729_181857.jpg', 'RES_20190729_181914.jpg', 'RES_20190729_183142.jpg', 'RES_20190729_183811.jpg', 'RES_20190729_184014.jpg', 'RES_20190729_184018.jpg', 'RES_20190729_204159.jpg', 'RES_20190730_180110.jpg', 'RES_20190730_182811.jpg', 'RES_20190730_182904.jpg', 'RES_20190730_183327.jpg', 'RES_20190730_183415.jpg', 'RES_20190730_183432.jpg', 'RES_20190730_183708.jpg', 'RES_20190730_183812.jpg', 'RES_20190730_184952.jpg', 'RES_20190730_185559.jpg', 'RES_20190730_185821.jpg', 'RES_20190730_190321.jpg', 'RES_20190730_190330.jpg', 'RES_20190730_190428.jpg', 'RES_20190730_190506.jpg', 'RES_20190730_190532.jpg', 'RES_20190730_190751.jpg', 'RES_20190730_190824.jpg', 'RES_20190730_190940.jpg', 'RES_20190730_191019.jpg', 'RES_20190730_191943.jpg', 'RES_20190730_192017.jpg', 'RES_20190730_192056.jpg', 'RES_20190730_192409.jpg', 'RES_20190730_192502.jpg', 'RES_20190730_192913.jpg', 'RES_20190730_193220.jpg', 'RES_20190730_210101.jpg', 'RES_20190730_212458.jpg', 'RES_20190730_213621.jpg', 'RES_20190730_213719.jpg', 'RES_20190730_214627.jpg', 'RES_20190730_215231.jpg', 'RES_20190731_153637.jpg', 'RES_20190805_150545.jpg', 'RES_20190805_150548.jpg', 'RES_20190805_150701.jpg', 'RES_20190805_150721.jpg', 'RES_20190805_150746.jpg', 'RES_20190805_150752.jpg', 'RES_20190805_150820.jpg', 'RES_20190805_150825.jpg', 'RES_20190805_150844.jpg', 'RES_20190805_150849.jpg', 'RES_20190805_151009.jpg', 'RES_20190805_151131.jpg', 'RES_20190805_151149.jpg', 'RES_20190805_151207.jpg', 'RES_20190805_151225.jpg', 'RES_20190805_151315.jpg', 'RES_20190805_151413.jpg', 'RES_20190805_151445.jpg', 'RES_20190805_151614.jpg', 'RES_20190805_151703.jpg', 'RES_20190805_151815.jpg', 'RES_20190805_151819.jpg', 'RES_20190805_152008.jpg', 'RES_20190805_152011.jpg', 'RES_20190805_152103.jpg', 'RES_20190805_152106.jpg', 'RES_20190805_152158.jpg', 'RES_20190805_152200.jpg', 'RES_20190805_152252.jpg', 'RES_20190805_152256.jpg', 'RES_20190805_152328.jpg', 'RES_20190805_152334.jpg', 'RES_20190805_152418.jpg', 'RES_20190805_152420.jpg', 'RES_20190805_152455.jpg', 'RES_20190805_152457.jpg', 'RES_20190805_152534.jpg', 'RES_20190805_152537.jpg', 'RES_20190805_152618.jpg', 'RES_20190805_152623.jpg', 'RES_20190805_152700.jpg', 'RES_20190805_152706.jpg', 'RES_20190805_152742.jpg', 'RES_20190805_152747.jpg', 'RES_20190805_152827.jpg', 'RES_20190805_152934.jpg', 'RES_20190805_153006.jpg', 'RES_20190805_153047.jpg', 'RES_20190805_153115.jpg', 'RES_20190805_153147.jpg', 'RES_20190805_153220.jpg', 'RES_20190805_153342.jpg', 'RES_20190805_153400.jpg', 'RES_20190805_153437.jpg', 'RES_20190805_153446.jpg', 'RES_20190805_153524.jpg', 'RES_20190805_153535.jpg', 'RES_20190805_153607.jpg', 'RES_20190805_153613.jpg', 'RES_20190805_153648.jpg', 'RES_20190805_153659.jpg', 'RES_20190805_153739.jpg', 'RES_20190805_153843.jpg', 'RES_20190805_153850.jpg', 'RES_20190805_153925.jpg', 'RES_20190805_153932.jpg', 'RES_20190805_154004.jpg', 'RES_20190805_154012.jpg', 'RES_20190805_154037.jpg', 'RES_20190805_154043.jpg', 'RES_20190805_154116.jpg', 'RES_20190805_154123.jpg', 'RES_20190805_154423.jpg', 'RES_20190805_154432.jpg', 'RES_20190805_154503.jpg', 'RES_20190805_154512.jpg', 'RES_20190805_154538.jpg', 'RES_20190805_154551.jpg', 'RES_20190805_154620.jpg', 'RES_20190805_154626.jpg', 'RES_20190805_154703.jpg', 'RES_20190805_154707.jpg', 'RES_20190805_155042.jpg', 'RES_20190805_155049.jpg', 'RES_20190805_155124.jpg', 'RES_20190805_155128.jpg', 'RES_20190805_155159.jpg', 'RES_20190805_155203.jpg', 'RES_20190805_155235.jpg', 'RES_20190805_155238.jpg', 'RES_20190805_155305.jpg', 'RES_20190805_155312.jpg', 'RES_20190805_155352.jpg', 'RES_20190805_155400.jpg', 'RES_20190805_155433.jpg', 'RES_20190805_155439.jpg', 'RES_20190805_155519.jpg', 'RES_20190805_155523.jpg', 'RES_20190805_155552.jpg', 'RES_20190805_155555.jpg', 'RES_20190805_155618.jpg', 'RES_20190805_155625.jpg', 'RES_20190805_155641.jpg', 'RES_20190805_155648.jpg', 'RES_20190805_155718.jpg', 'RES_20190805_155726.jpg', 'RES_20190805_155739.jpg', 'RES_20190805_155742.jpg', 'RES_20190805_155820.jpg', 'RES_20190805_155828.jpg', 'RES_20190805_155859.jpg', 'RES_20190805_155902.jpg', 'RES_20190805_160750.jpg', 'RES_20190805_160803.jpg', 'RES_20190805_160814.jpg', 'RES_20190805_160820.jpg', 'RES_20190805_160846.jpg', 'RES_20190805_160848.jpg', 'RES_20190805_160915.jpg', 'RES_20190805_160917.jpg', 'RES_20190805_160938.jpg', 'RES_20190805_160945.jpg', 'RES_20190805_161013.jpg', 'RES_20190805_161017.jpg', 'RES_20190805_161051.jpg', 'RES_20190805_161053.jpg', 'RES_20190805_161114.jpg', 'RES_20190805_161116.jpg', 'RES_20190805_161540.jpg', 'RES_20190805_161611.jpg', 'RES_20190805_161640.jpg', 'RES_20190805_161708.jpg', 'RES_20190805_161741.jpg', 'RES_20190805_162043.jpg', 'RES_20190805_162117.jpg', 'RES_20190805_162322.jpg', 'RES_20190805_162755.jpg', 'RES_20190805_162828.jpg', 'RES_20190805_163108.jpg', 'RES_20190805_163151.jpg', 'RES_20190805_163533.jpg', 'RES_20190805_163617.jpg', 'RES_20190805_163644.jpg', 'RES_20190805_163649.jpg', 'RES_20190805_163731.jpg', 'RES_20190805_163804.jpg', 'RES_20190805_163914.jpg', 'RES_20190805_163926.jpg', 'RES_20190805_164002.jpg', 'RES_20190805_164010.jpg', 'RES_20190805_181830.jpg', 'RES_20190805_183038.jpg', 'RES_20190805_183409.jpg', 'RES_20190805_183518.jpg', 'RES_20190805_184052.jpg', 'RES_20190805_184241.jpg', 'RES_20190805_184329.jpg', 'RES_20190805_184424.jpg', 'RES_20190805_184453.jpg', 'RES_20190805_184530.jpg', 'RES_20190805_184932.jpg', 'RES_20190805_185019.jpg', 'RES_20190805_185047.jpg', 'RES_20190805_185123.jpg', 'RES_20190805_185131.jpg', 'RES_20190805_190243.jpg', 'RES_20190805_190250.jpg', 'RES_20190805_190328.jpg', 'RES_20190805_190354.jpg', 'RES_20190805_190439.jpg', 'RES_20190805_190512.jpg', 'RES_20190805_190538.jpg', 'RES_20190805_190625.jpg', 'RES_20190805_190701.jpg', 'RES_20190805_190741.jpg', 'RES_20190805_190806.jpg', 'RES_20190805_190830.jpg', 'RES_20190805_190857.jpg', 'RES_20190805_191211.jpg', 'RES_20190805_191213.jpg', 'RES_20190805_191427.jpg', 'RES_20190805_191746.jpg', 'RES_20190805_191804.jpg', 'RES_20190805_191836.jpg', 'RES_20190805_191934.jpg', 'RES_20190805_192002.jpg', 'RES_20190805_192037.jpg', 'RES_20190805_192210.jpg', 'RES_20190805_192310.jpg', 'RES_20190805_192347.jpg', 'RES_20190805_192355.jpg', 'RES_20190805_192428.jpg', 'RES_20190805_192455.jpg', 'RES_20190805_192506.jpg', 'RES_20190805_192531.jpg', 'RES_20190805_192538.jpg', 'RES_20190805_194136.jpg', 'RES_20190805_194219.jpg', 'RES_20190805_194655.jpg', 'RES_20190805_194848.jpg', 'RES_20190805_194920.jpg', 'RES_20190805_195044.jpg', 'RES_20190805_195208.jpg', 'RES_20190805_195231.jpg', 'RES_20190805_195426.jpg', 'RES_20190805_195454.jpg', 'RES_20190805_195502.jpg', 'RES_20190805_195605.jpg', 'RES_20190805_195607.jpg', 'RES_20190805_195729.jpg', 'RES_20190805_200127.jpg', 'RES_20190805_201801.jpg', 'RES_20190805_212819.jpg', 'RES_20190806_150430.jpg', 'RES_20190806_150446.jpg', 'RES_20190806_150458.jpg', 'RES_20190806_150500.jpg', 'RES_20190806_164055.jpg', 'RES_20190806_164157.jpg', 'RES_20190806_164236.jpg', 'RES_20190806_164357.jpg', 'RES_20190806_164429.jpg', 'RES_20190806_174937.jpg', 'RES_20190806_175043.jpg', 'RES_20190806_175421.jpg', 'RES_20190806_175536.jpg', 'RES_20190806_175638.jpg', 'RES_20190806_175739.jpg', 'RES_20190806_180320.jpg', 'RES_20190806_180327.jpg', 'RES_20190806_180437.jpg', 'RES_20190806_180543.jpg', 'RES_20190806_180654.jpg', 'RES_20190806_180933.jpg', 'RES_20190806_181045.jpg', 'RES_20190806_182536.jpg', 'RES_20190806_182909.jpg', 'RES_20190806_183336.jpg', 'RES_20190806_184000.jpg', 'RES_20190806_184118.jpg', 'RES_20190806_184221.jpg', 'RES_20190806_184337.jpg', 'RES_20190806_184452.jpg', 'RES_20190806_184552.jpg', 'RES_20190806_184659.jpg', 'RES_20190806_184809.jpg', 'RES_20190806_185043.jpg', 'RES_20190806_185159.jpg', 'RES_20190806_185323.jpg', 'RES_20190806_185548.jpg', 'RES_20190806_185755.jpg', 'RES_20190806_185939.jpg', 'RES_20190806_190050.jpg', 'RES_20190806_190147.jpg', 'RES_20190806_190301.jpg', 'RES_20190806_190444.jpg', 'RES_20190806_190620.jpg', 'RES_20190806_190729.jpg', 'RES_20190806_190841.jpg', 'RES_20190806_191459.jpg', 'RES_20190806_191550.jpg', 'RES_20190806_192153.jpg', 'RES_20190806_192253.jpg', 'RES_20190806_192359.jpg', 'RES_20190806_192403.jpg', 'RES_20190806_192732.jpg', 'RES_20190806_192932.jpg', 'RES_20190806_192936.jpg', 'RES_20190806_193147.jpg', 'RES_20190806_193151.jpg', 'RES_20190806_193224.jpg', 'RES_20190806_193227.jpg', 'RES_20190806_193538.jpg', 'RES_20190806_193540.jpg', 'RES_20190806_193712.jpg', 'RES_20190806_193817.jpg', 'RES_20190806_193820.jpg', 'RES_20190806_193956.jpg', 'RES_20190806_194151.jpg', 'RES_20190806_194317.jpg', 'RES_20190806_204616.jpg', 'RES_20190806_204730.jpg', 'RES_20190806_204845.jpg', 'RES_20190806_204948.jpg', 'RES_20190806_205052.jpg', 'RES_20190806_205550.jpg', 'RES_20190806_212128.jpg', 'RES_20190806_212219.jpg', 'RES_20190806_212312.jpg', 'RES_20190806_212725.jpg', 'RES_20190806_213215.jpg', 'RES_20190806_213533.jpg', 'RES_20190806_213733.jpg', 'RES_20190806_214640.jpg', 'RES_20190806_214824.jpg', 'RES_20190806_214918.jpg', 'RES_20190806_214927.jpg', 'RES_20190812_212042.jpg', 'RES_20190812_213508.jpg', 'RES_20190812_213942.jpg', 'RES_20190812_214221.jpg', 'RES_20190812_214223.jpg', 'RES_20190812_214411.jpg', 'RES_20190812_214659.jpg', 'RES_20190814_140435.jpg', 'RES_20190814_140438.jpg', 'RES_20190814_140859.jpg', 'RES_20190814_140902.jpg', 'RES_20190814_140957.jpg', 'RES_20190814_140959.jpg', 'RES_20190815_020422.jpg', 'RES_20190815_020430.jpg', 'RES_20190815_020522.jpg', 'RES_20190815_020530.jpg', 'RES_20190815_021340.jpg', 'RES_20190815_021608.jpg', 'RES_20190819_212816.jpg', 'RES_20190822_163140.jpg', 'RES_20190822_163206.jpg', 'RES_20190822_163257.jpg', 'RES_20190822_163355.jpg'];

var imgesH=[640, 640, 640, 640, 640, 640, 640, 640, 640, 314, 314, 314, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 336, 382, 424, 424, 424, 424, 359, 359, 478, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 315, 314, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 478, 478, 359, 478, 478, 478, 427, 427, 427, 427, 427, 427, 427, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 480, 480, 640, 640, 480, 480, 640, 640, 640, 640, 640, 478, 422, 422, 422, 422, 422, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 383, 640, 640, 640, 640, 480, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 480, 640, 425, 364, 387, 387, 433, 393, 393, 364, 364, 364, 364, 364, 364, 640, 640, 640, 640, 640, 640, 640, 640, 387, 387, 387, 387, 387, 387, 387, 387, 424, 497, 497, 497, 425, 425, 425, 425, 425, 425, 425, 425, 425, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 640, 478, 398, 425, 640, 640, 512, 427, 427, 640, 640, 640, 640, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 640, 512, 512, 512, 512, 640, 640, 640, 640, 640, 423, 423, 339, 339, 339, 339, 423, 423, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 535, 535, 535, 535, 535, 535, 535, 535, 425, 425, 425, 425, 425, 358, 358, 358, 358, 358, 358, 358, 358, 358, 358, 340, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 339, 339, 423, 423, 339, 339, 423, 423, 339, 339, 339, 339, 339, 339, 423, 423, 341, 341, 425, 425, 341, 341, 425, 425, 341, 341, 425, 425, 341, 341, 425, 425, 341, 341, 425, 425, 425, 425, 425, 425, 425, 557, 557, 557, 497, 497, 640, 640, 427, 427, 427, 427, 427, 427, 640, 640, 640, 640, 512, 425, 380, 425, 425, 425, 640, 640, 425, 425, 640, 640, 640, 640, 640, 425, 425, 425, 425, 425, 425, 425, 425, 425, 380, 380, 380, 380, 640, 640, 640, 425, 425, 425, 425, 425, 425, 425, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 425, 640, 640, 640, 640, 358, 358, 287, 425, 425, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 478, 478, 478, 478, 478, 478, 640, 640, 640, 640, 535, 535, 535, 535, 535, 535, 535, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 622, 622, 622, 622, 640, 640, 640, 640, 640, 640, 640];

imgesW=[478, 478, 478, 478, 478, 478, 478, 393, 478, 640, 640, 640, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 640, 576, 640, 640, 640, 640, 480, 480, 640, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 640, 640, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 478, 640, 640, 480, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 425, 425, 425, 425, 425, 478, 478, 478, 478, 445, 445, 445, 510, 383, 383, 510, 510, 383, 383, 510, 510, 510, 510, 478, 640, 640, 640, 640, 640, 640, 480, 480, 420, 420, 420, 420, 510, 538, 538, 538, 538, 538, 538, 465, 465, 465, 493, 510, 510, 518, 518, 518, 518, 468, 468, 468, 468, 468, 530, 530, 530, 530, 530, 530, 530, 576, 640, 640, 640, 640, 480, 640, 640, 478, 478, 478, 478, 478, 478, 478, 445, 383, 425, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 478, 425, 425, 425, 425, 425, 425, 425, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 423, 640, 640, 640, 425, 425, 341, 640, 640, 445, 445, 445, 445, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 478, 383, 383, 383, 383, 610, 610, 610, 610, 610, 640, 640, 512, 512, 512, 512, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 512, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 512, 512, 640, 640, 512, 512, 640, 640, 512, 512, 512, 512, 512, 512, 640, 640, 512, 512, 640, 640, 512, 512, 640, 640, 512, 512, 640, 640, 512, 512, 640, 640, 512, 512, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 425, 425, 425, 425, 357, 640, 640, 640, 640, 640, 425, 425, 640, 640, 425, 425, 425, 425, 425, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 640, 500, 500, 500, 640, 640, 640, 640, 640, 640, 640, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 640, 426, 426, 425, 425, 640, 640, 512, 640, 640, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 426, 425, 426, 426, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 425, 640, 640, 640, 640, 640, 640, 518, 510, 510, 468, 640, 640, 640, 640, 640, 640, 640, 473, 472, 470, 470, 470, 470, 470, 462, 462, 462, 462, 462, 462, 640, 640, 640, 640, 632, 632, 445, 426, 426, 426, 426];


var lengthgal=images.length;

  var slides = document.getElementsByClassName("mySlides");

  if (n > lengthgal-1) {slideIndex =1;}    
  if (n < 1) {slideIndex = lengthgal-1;}  

  				//console.log("Before "+document.getElementById("demo1").height);
  

  				//console.log("After "+document.getElementById("demo1").height);
  var Hcl=document.getElementById("myModal").clientHeight;
  var Wcl=document.getElementById("myModal").clientWidth;
   // var Hcl=document.getElementById("demo1").height;
   // var Wcl=document.getElementById("demo2").width;
  var Him=Wcl*imgesH[slideIndex-1]/imgesW[slideIndex-1];
  var Wim=Wcl
  //console.log("Him, Wim, Hcl,Wcl "+Him+" "+Wim+" "+Hcl+" "+Wcl);
  //var marginH=(Hcl-Him)/2;

  if(Him>Hcl){
  slides[1].style.display = "none"; 
  slides[0].style.display = "block";
  document.getElementById("demo1").src="gallery/"+images[slideIndex-1];
}

  else{
  slides[0].style.display = "none"; 
  slides[1].style.display = "block"; 
  
  //document.getElementById("demo2").style="width:100%;"+"margin-top:"+marginH+"px;"
  document.getElementById("demo2").src="gallery/"+images[slideIndex-1];
}
  document.getElementById("dummy1").src="gallery/"+images[slideIndex-1+1];
  
  

  //console.log("modla "+document.getElementById("myModal").clientHeight+" "+document.getElementById("myModal").clientWidth);
 //document.getElementById("demo1").style="width:"+"200px;";
//  document.getElementById("demo2").src="gallery/"+images[slideIndex];
//  document.getElementById("demo2").style="width:"+"200px;";
//  document.getElementById("demo3").src="gallery/"+images[slideIndex+1];
//  document.getElementById("demo3").style="width:"+"200px;";

//  slides[0].style.display = "block";  

}









