<template>
<div class="container-fluid">
    <div class="row flex-xl-nowrap2">
        <div class="topBar">
            <button class="fav" @click="$router.push('/favorite')">
                my favorites
                <b-icon icon="heart-fill" scale="1.1" style="margin-left:3px;"></b-icon>
            </button>
            <button class="returnButton" @click="$router.go(-1)">
                <b-icon icon="arrow-left" scale="2.5"></b-icon>
            </button>
            <br />
            <br />
            <span class="topText_recipe">eNUF</span>
            <br />
        </div>

        <div class="sideBar col-xs-2 col-sm-2 col-md-2 col-xl-2">
            <ul class="navs">
                <br />
                <a :class="{active: active===0}" @click="scrollTo(0)">Dish Name</a>
                <a :class="{active: active===1}" @click="scrollTo(1)">Ingredients</a>
                <a :class="{active: active===2}" @click="scrollTo(2)">Nutrition</a>
                <a :class="{active: active===3}" @click="scrollTo(3)">Video</a>
                <a :class="{active: active===4}" @click="scrollTo(4)">Direction</a>
                <br /><br />
            </ul>
        </div>
        <div class="rightBlock">
            <p class="rightBlockText">EASY</p>
            <p class="rightBlockText">～30mins</p>
            <p class="rightBlockText">1-2 People</p>
        </div>

        <div class="content push-md-2 push-sm-2">
            <div class="block0">
                <p class="dishName">Braised Pork Belly</p>
                <button class="favoriteButton" @click="isActive = !isActive">
                    <b-icon icon="heart" scale="2.5"></b-icon>
                </button>
                <br />
                <img src="../assets/recipe1.png" width="100%">
            </div>
            <div class="block1">
                <span class="blockTitle">Ingredients</span>
                <span class="blockContent">600 g pork belly, about 1.3lb
                    <br>250 ml Shaoxing rice wine, about 1 cup
                    <br>2 tablespoon light soy sauce
                    <br>1 tablespoon dark soy sauce
                    <br>5 slices ginger
                    <br>2 star-anise
                    <br>2 bay leaf
                    <br>20 g rock sugar, or 1 tablespoon regular sugar
                </span>
            </div>
            <div class="block1">
                <span class="blockTitle">Nutrition</span>
                <span class="blockContent">Carbs: 2g
                    <br>Fat: 44g
                    <br>Sugar: 4g
                    <br>Saturated: 15g
                    <br>Protein: 7g
                    <br>Sodium: 941mg
                    <br>Cholesterol: 54mg
                    <br>Calorie: 454cal
                </span>
            </div>
            <div class="block1">
                <span class="blockTitle">Video</span>
                <br />
                <iframe width=80% height="350" src="https://www.youtube.com/embed/yiSyuBQSoMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div class="block2">
                <span class="blockTitle">Direction</span>
                <span class="stepsTitle">1. Blanch the pork</span>
                <span class="stepsText">→ Cut pork belly into 2-3 cm chunks (about 1 inch). Put into a pot then fill with cold water. Boil over high heat.
                    <br>→ Once it starts boiling, you’ll see froth appearing on the surface. Skim it off with a spoon.
                    <br>→ Drain the meat in a colander then rinse under running water.
                </span>
                <span class="stepsTitle">2. Braise the pork</span>
                <span class="stepsText">→ Put the pork into a clean pot (ideally, a small one). Pour in Shaoxing rice wine and hot water (barely covering the meat). Add light soy sauce, dark soy sauce, ginger, star anise and bay leaves.
                    <br>→ Bring the liquid to a full boil. Cover with a lid and leave to simmer over low heat for 1-1.5 hour until the meat is fork-tender (During the process stir the meat around a few times).
                </span>
                <span class="stepsTitle">3. Thicken the broth</span>
                <span class="stepsText">→ Uncover the pot. Add sugar then turn the heat to the highest. Leave to boil fiercely (Stir from time to time) until the broth reduces to just enough to cover the bottom of the pot.
                    <br>→ Serve immediately with plain steamed rice and vegetable dishes of your choice.
                </span>
                <span class="stepsTitle">4. Store and reheat</span>
                <span class="stepsText">→ The cooked pork belly can be stored in the fridge for up to three days or in the freezer for 2 months.
                    <br>→ Reheat in a pot (defrost first if frozen) over low heat. Add a little water to help to heat the pork thoroughly.
                    <br />
                </span>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            active: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, false)
    },
    destroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        myFunction(x) {
            x.classList.toggle("fa-thumbs-down");
        },
        onScroll() {
            const navContents = document.querySelectorAll('.content div')
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex
        },
        scrollTo(index) {
            const targetOffsetTop = document.querySelector(`.content div:nth-child(${index + 1})`).offsetTop
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            const STEP = 100
            if (scrollTop > targetOffsetTop) {
                smoothUp()
            } else {
                smoothDown()
            }

            function smoothDown() {
                if (scrollTop < targetOffsetTop) {
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    requestAnimationFrame(smoothDown)
                }
            }

            function smoothUp() {
                if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    requestAnimationFrame(smoothUp)
                }
            }
        }
    }
}
</script>

<style>
.fav {
    position: fixed;
    float: right;
    right: 1vh;
    top: 3vh;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
    cursor: pointer;
    background-color: #adc965;
    border: 0px solid white;
    border-radius: 10px;
    height: 7vh;
}

.fav:hover {
    background-color: #ffaa01;
    cursor: pointer;
}

.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
}

.topBar {
    background-color: #adc965;
    margin-top: 2vh;
    border-radius: 10px;
    height: 22vh;
    padding: 0;
    width: 100%;
}

.returnButton {
    position: absolute;
    top: 3vh;
    left: 15px;
    height: 8vh;
    width: 5%;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.returnButton:hover {
    background-color: #e4dadae5;
    color: white;
}

.topText_recipe {
    font-size: 40px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-family: system-ui;
    text-shadow: gray;
}

.sideBar {
    float: left;
    height: auto;
    width: 220px;
    background-color: #adc965;
    border-radius: 10px;
    margin-top: 2vh;
}

.navs {
    border-top: 20px solid #adc965;
    position: fixed;
    left: 0%;
    width: 220px;
    border-radius: 10px;
    background-color: #adc965;
}

.navs a {
    display: block;
    color: white;
    padding: 16px;
    text-decoration: none;
}

/* Active/current link */
.navs a.active {
    background-color: #89D5C9;
    color: white;
}

/* Links on mouse-over */
.snavs a:hover:not(.active) {
    background-color: #89D5C9;
    color: white;
}

.rightBlock {
    position: fixed;
    top: 200px;
    right: 30px;
    width: 20vh;
    height: auto;
    background-color: white;
    border-radius: 10px;
    margin-top: 2vh;
    border: 3px dotted #adc965;
}

.rightBlockText {
    padding-top: 2vh;
    justify-content: center;
    align-items: center;
    color: #819611;
    font-size: 15px;
}

.content {
    width: 80%;
    background-color: white;
}

.block0 {
    margin-top: 2vh;
    border: 10px solid white;
    width: 75%;
    height: auto;
    box-sizing: border-box;
    background: white;
    margin-left: 12vh;
}

.block1 {
    /* border: 1px dotted black; */
    margin-top: 2vh;
    border-top: 3px dotted #819611;
    border-bottom: 10px solid white;
    border-left: 10px solid white;
    border-right: 10px solid white;
    width: 75%;
    height: auto;
    box-sizing: border-box;
    background: white;
    margin-left: 12vh;
}

.block2 {
    /* border: 1px dotted black; */
    margin-top: 2vh;
    border-top: 3px dotted #819611;
    border-bottom: 10px solid white;
    border-left: 10px solid white;
    border-right: 10px solid white;
    width: 75%;
    height: 100vh;
    box-sizing: border-box;
    background: white;
    margin-left: 12vh;
}

.dishName {
    display: inline-block;
    margin-top: 1vh;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: bold;
    color: #819611;
}

.favoriteButton {

    float: right;
    margin-top: 3vh;
    width: 5%;
    color: #819611;
    border: none;
    background-color: white;
    border-radius: 5px;
}

.blockTitle {
    display: flex;
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #819611;
}

.blockContent {
    display: flex;
    margin-top: 1vh;
    align-items: center;
    padding-left: 150px;
    font-size: 18px;
    color: #819611;
    text-align: left;
    /* border: 1px dotted black; */
    width: 95%;
}

.stepsTitle {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    color: #819611;
    text-align: left;
    width: 100%;
    padding-left: 20px;
}

.stepsText {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #96aa27;
    text-align: left;
    width: 100%;
}
</style>
