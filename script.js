const famousPerson = ["Einstein, Albert", "Gates, Bill", "Jobs, Steve", "Musk, Elon", "Jefferson, Thomas", "I, Pedro", "King, Martin Luther", "Lennon, John", "Socrates", "Plato", "Aristotle"];
const randomThings = [`street`,`engine`,`touch`,`key`,`food`,`cub`,`fairies`,`money`,`secretary`,`division`,`point`,`swim`,`range`,`current`,`name`,`experience`,`chin`,`cable`,`wash`,`vein`,`button`,`impulse`,`downtown`,`reading`,`jelly`,`insect`,`slip`,`powder`,`dogs`,`dime`,`copper`,`hydrant`,`iron`,`shake`,`feeling`,`orange`,`brake`,`skate`,`cows`,`shade`,`bed`,`weight`,`branch`,`pets`,`loaf`,`doctor`,`company`,`finger`,`winter`,`cat`,`window`,`bath`,`pen`,`visitor`,`judge`,`hands`,`corn`,`reward`,`honey`,`vessel`,`color`,`sisters`,`stew`,`slope`,`carriage`,`arm`,`pocket`,`grain`,`match`,`foot`,`stranger`,`crib`,`dinner`,`underwear`,`place`,`maid`,`drop`,`back`,`sound`,`dinosaurs`,`quicksand`,`edge`,`shape`,`reason`,`love`,`way`,`price`,`trees`,`thunder`,`writer`,`sign`,`lumber`,`whistle`,`yam`,`calendar`,`coal`,`mouth`,`nation`,`drawer`,`shoe`,`flag`,`frog`,`run`,`bone`,`bikes`,`store`,`office`,`oatmeal`,`plane`,`dolls`,`poison`,`request`,`brother`,`believe`,`laugh`,`pickle`,`shame`,`debt`,`trains`,`moon`,`calculator`,`relation`,`flowers`,`tub`,`bucket`,`tomatoes`,`fang`,`ghost`,`minute`,`death`,`chance`,`mitten`,`driving`,`marble`,`produce`,`society`,`snail`,`field`,`top`,`walk`,`coat`,`flavor`,`brass`,`receipt`,`wood`,`kittens`,`camera`,`sponge`,`throat`,`baseball`,`ants`,`mother`,`boot`,`wine`,`sand`,`knot`,`friends`,`pet`,`cast`,`suggestion`,`breath`,`cattle`,`hook`,`hole`,`bit`,`cream`,`spade`,`school`,`bear`,`cemetery`,`farm`,`digestion`,`year`,`salt`,`actor`,`recess`,`test`,`suit`,`rhythm`,`cellar`,`soda`,`boy`,`cover`,`jeans`,`wish`,`space`,`verse`,`day`,`island`,`shoes`,`tray`,`crown`,`van`,`soap`,`shelf`,`stretch`,`rice`,`fog`,`tiger`,`butter`,`profit`,`box`,`rub`,`belief`,`daughter`,`sofa`,`detail`,`insurance`,`distance`,`condition`,`tax`,`gold`,`question`,`market`,`change`,`trail`,`mailbox`,`girls`,`respect`,`linen`,`level`,`aunt`,`wall`,`skirt`,`beginner`,`mass`,`amusement`,`teeth`,`parcel`,`snow`,`silk`,`picture`,`air`,`squirrel`,`yak`,`things`,`scarecrow`,`rabbits`,`number`,`watch`,`cloth`,`drain`,`curtain`,`hair`,`veil`,`note`,`pleasure`,`magic`,`robin`,`hill`,`stream`,`approval`,`noise`,`observation`,`history`,`cheese`,`hope`,`language`,`crack`,`sister`,`mask`,`event`,`oil`,`industry`,`door`,`motion`,`degree`,`purpose`,`volleyball`,`balance`,`fuel`,`pin`,`sleep`,`self`,`addition`,`quilt`,`appliance`,`plants`,`bulb`,`river`,`work`,`berry`,`song`,`statement`,`dock`,`quiver`,`muscle`,`sleet`,`smoke`,`man`,`rock`,`bottle`,`zebra`,`trouble`,`substance`,`end`,`tooth`,`punishment`,`alarm`,`idea`,`square`,`shirt`,`eggs`,`crime`,`health`,`cake`,`fruit`,`plastic`,`face`,`haircut`,`quill`,`lamp`,`thumb`,`zephyr`,`cobweb`,`loss`,`roof`,`riddle`,`spoon`,`kettle`,`eyes`,`gate`,`snake`,`rule`,`horn`,`planes`,`building`,`sheep`,
`woman`,`stone`,`jar`,`arch`,`pancake`,`son`,`grip`,`start`,`stove`,`knee`,`crayon`,`sneeze`,`trucks`,`wound`,`afterthought`,`icicle`,`interest`,`waves`,`toad`,`caption`,`carpenter`,`thought`,`view`,`grandfather`,`grass`,`screw`,`lunch`,`friend`,`rabbit`,`group`,`ticket`,`earthquake`,`tail`,`ball`,`vacation`,`friction`,`trip`,`yard`,`sense`,`bells`,`discussion`,`account`,`cow`,`taste`,`activity`,`tent`,`show`,`board`,`texture`,`songs`,`surprise`,`bubble`,`trick`,`doll`,`hospital`,`train`,`force`,`neck`,`sheet`,`side`,`representative`,`cherry`,`cats`,`fear`,`table`,`mint`,`route`,`cent`,`direction`,`gun`,`sweater`,`pies`,`cup`,`leg`,`coach`,`beds`,`stitch`,`acoustics`,`head`,`peace`,`thing`,`connection`,`letter`,`popcorn`,`chalk`,`flame`,`grandmother`,`toothbrush`,`brick`,`wax`,`power`,`ladybug`,`bee`,`twig`,`expansion`,`record`,`seed`,`reaction`,`bridge`,`chess`,`lettuce`,`bead`,`behavior`,`frame`,`yarn`,`toys`,`class`,`theory`,`protest`,`chicken`,`step`,`border`,`thread`,`rod`,`control`,`star`,`weather`,`books`,`paper`,`jellyfish`,`card`,`town`,`arithmetic`,`toe`,`potato`,`smile`,`cart`,`pollution`,`lunchroom`,`bomb`,`waste`,`crowd`,`need`,`flower`,`canvas`,`pie`,`chickens`,`fact`,`knowledge`,`ship`,`guitar`,`soup`,`cough`,`pail`,`dust`,`quartz`,`cushion`,`lock`,`jam`,`oven`,`time`,`giants`,`beef`,`hall`,`straw`,`harmony`,`vase`,`quarter`,`lake`,`apparel`,`horse`,`rake`,`wheel`,`memory`,`bedroom`,`fly`,`whip`,`jail`,`elbow`,`stem`,`water`,`existence`,`furniture`,`army`,`children`,`push`,`uncle`,`basin`,`plough`,`stomach`,`cave`,`station`,`front`,`word`,`wilderness`,`care`,`creature`,`nut`,`skin`,`territory`,`book`,`shock`,`kiss`,`monkey`,`toy`,`mind`,`turkey`,`ink`,`blade`,`person`,`adjustment`,`error`,`heat`,`position`,`laborer`,`mist`,`meeting`,`credit`,`coil`,`stick`,`birds`,`cracker`,`use`,`can`,`fall`,`partner`,`seat`,`title`,`spark`,`effect`,
`ray`,`zinc`,`string`,`dress`,`legs`,`hammer`,`story`,`smash`,`education`,`lip`,`prose`,`plantation`,`sea`,`earth`,`ring`,`decision`,`milk`,`pipe`,`channel`,`plot`,`house`,`sky`,`land`,`sack`,`birth`,`library`,`transport`,`blood`,`unit`,`flock`,`fowl`,`airport`,`spot`,`liquid`,`action`,`shop`,`metal`,`club`,`church`,`limit`,`jump`,`camp`,`stage`,`fork`,`locket`,`nest`,`play`,`zoo`,`servant`,`order`,`scent`,`apparatus`,`humor`,`airplane`,`turn`,`passenger`,`twist`,`clover`,`dog`,`hose`,`payment`,`regret`,`spy`,`party`,`act`,`bell`,`roll`,`mom`,`holiday`,`tin`,`value`,`eye`,`spiders`,`rate`,`drink`,`pot`,`sticks`,`rainstorm`,`mice`,`pan`,`seashore`,`ducks`,`eggnog`,`sock`,`circle`,`wire`,`anger`,`sink`,`structure`,`sugar`,`example`,`letters`,`meat`,`destruction`,`week`,`fire`,`middle`,`comparison`,`crate`,`floor`,`advice`,`voyage`,`bushes`,`war`,`tramp`,`giraffe`,`low`,`babies`,`month`,`wing`,
`minister`,`authority`,`wind`,`rain`,`wren`,`page`,`fireman`,`queen`,`flesh`,`achiever`,`truck`,`pig`,`competition`,`sail`,`lace`,`mark`,`oranges`,`jewel`,`curve`,`property`,`vest`,`governor`,`slave`,`pear`,`girl`,`quiet`,`base`,`hot`,`measure`,`rail`,`grade`,`wealth`,`dad`,`wool`,`clam`,`argument`,`move`,`geese`,`frogs`,`ear`,`cook`,`income`,`road`,`join`,`steel`,`umbrella`,`thrill`,`hobbies`,`pump`,`government`,`burst`,`cherries`,`basket`,`cap`,`science`,`blow`,`boundary`,`sun`,`cars`,`pest`,`part`,`design`,`donkey`,`wrist`,`houses`,`teaching`,`men`,`fold`,`treatment`,`zipper`,`grape`,`badge`,`throne`,`vegetable`,`duck`,`advertisement`,`playground`,`rifle`,`desire`,`system`,`scissors`,`pencil`,`women`,`discovery`,`boat`,`country`,`north`,`bird`,`temper`,`support`,`horses`,`expert`,`stocking`,`team`,`development`,`railway`,`morning`,`writing`,`yoke`,`kick`,`exchange`,`toes`,`attraction`,`battle`,`rings`,`snakes`,`stop`,`offer`,`distribution`,`home`,`amount`,`ice`,`egg`,`meal`,`smell`,`birthday`,`trade`,`collar`,`spring`,`machine`,`deer`,`plant`,`trousers`,`bike`,`hat`,`increase`,`porter`,`scale`,`leather`,`coast`,`bat`,`mine`,`hour`,`business`,`harbor`,`ocean`,`knife`,`mountain`,`sort`,`cakes`,`bag`,`cause`,`volcano`,`stamp`,`tank`,`form`,`car`,`hate`,`talk`,`snails`,`invention`,`juice`,`nerve`,`wave`,`pull`,`scene`,`bite`,`growth`,`notebook`,`tongue`,`angle`,`rest`,`needle`,`sidewalk`,`afternoon`,`creator`,`look`,`cactus`,`art`,`tree`,`voice`,`worm`,`desk`,`celery`,`swing`,`steam`,`selection`,`glove`,`flight`,`crook`,`fish`,`wrench`,`basketball`,`kitty`,`size`,`plate`,`glass`,`bait`,`crow`,`quince`,`night`,`dirt`,`baby`,`line`,`rose`,`root`,`pigs`,`cannon`,`ground`,`nose`,`summer`,`religion`,`agreement`,`animal`,`toothpaste`,`committee`,`pizzas`,`attack`,`instrument`,`aftermath`,`silver`,`hand`,`scarf`,`room`,`guide`,`cabbage`,`tendency`,`rat`,];
let randomThings1, randomThings2, randomThings3;
let quote = "Click the button to generate a Random Fake Quote."

const famousQuotes = [`Two things are infinite: rd0 and rd1; and I'm not sure about rd0.`, 
`rd0 will get you from A to Z; rd1 will get you everywhere.`,
`rd0 is a lousy teacher.`,
`It's fine to celebrate rd0 but it is more important to heed the lessons of rd1.`, 
`rd0 distinguishes between a rd1 and a rd2.`,
`Your rd0 is limited, so don't waste it in someone else's rd1.`,
`How much rd0 have cost us the rd1 which have never happened?`,
`Never spend you rd0 before you have it.`,
`rd0 and rd1, that is the goal of true education.`,
`rd0 is not merely the absence of rd1, it is the presence of rd2.`,
`rd0 is over... If you want it.`,
`Imagine all the rd0.`,
`There is only one good, rd0, and one evil, rd1`,
`rd0, and rd1; one is the parent of luxury and indolence, and the other of meanness and viciousness, and both of discontent.`,
`rd0 is the source of all things.`,
`We can easily forgive a child who is afraid of the rd0, the real tragedy of life is when men are afraid of the rd1.`,
`rd0 is a waking dream.`,
`rd0 is parent of revolution and crime.`,
`I fear no man, but that thing, rd0, it scares me.`,
`rd0 is the triumph of rd1 over people.`,
`rd0 is the source of misunderstandings`,
`It is hard work, but there is rd0 in it.`,
`The right rd0, in the wrong rd1 can make all the difference in the world.`,
`Wanting rd0 does not give you the right to have it.`,
`No rd0 or rd1. Only rd2.`,
`It's time to kick rd0 and chew rd1... and I'm all outta rd1.`,
`It's easy to forget what a rd0 is in the middle of a battlefield.`,
`rd0. rd0 never changes.`,
`What is a rd0? A miserable little pile of rd1.`];

const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length);
}

const quoteGenerator = (famousQuotes, randomThings) => {
    randomThings1 = randomThings[getRandomIndex(randomThings)];
    randomThings2 = randomThings[getRandomIndex(randomThings)];
    randomThings3 = randomThings[getRandomIndex(randomThings)];
    return generatedQuote = famousQuotes[getRandomIndex(famousQuotes)].replace(/rd0/gi, randomThings1).replace(/rd1/gi, randomThings2).replace(/rd2/gi, randomThings3);
}

const getRandomPerson = famousPerson => {
    return famousPerson[getRandomIndex(famousPerson)];
}

const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomQuote = () => {
    const randomQuote = quoteGenerator(famousQuotes, randomThings);
    const randomPerson = getRandomPerson(famousPerson);
    quote = `"` + capitalizeFirstLetter(randomQuote) + `"`
    document.getElementById("person").innerHTML = '—' + randomPerson;
    document.getElementById("quote").innerHTML = quote;
}



