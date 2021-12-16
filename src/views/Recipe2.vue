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
            <p class="rightBlockText">2-3 People</p>
        </div>

        <div class="content push-md-2 push-sm-2">
            <div class="block0">
                <p class="dishName">Garlic Pork Chops</p>
                <button class="favoriteButton" @click="isActive = !isActive">
                    <b-icon icon="heart-fill" scale="2.5"></b-icon>
                </button>
                <br />
                <img src="../assets/r.jpg" width="100%">
            </div>
            <div class="block1">
                <span class="blockTitle">Ingredients</span>
                <span class="blockContent">4 pork chops, bone-in or boneless (about 1-inch thick)
                    <br>1 teaspoon paprika
                    <br>1 teaspoon garlic powder
                    <br>Salt and fresh cracked black pepper, to taste
                    <br>2 tablespoons butter
                    <br>2 tablespoons olive oil
                    <br>1 cup sliced brown mushrooms
                    <br>4-5 garlic cloves, crushed
                    <br>1 teaspoon Italian seasoning
                    <br>1 1/2 cups heavy cream
                    <br>1/2 cup (125ml) chicken broth
                    <br>1 tablespoon fresh chopped parsley
                    <br>Salt and pepper to taste
                </span>
            </div>
            <div class="block1">
                <span class="blockTitle">Nutrition</span>
                <span class="blockContent">Carbs: 7.32g
                    <br>Fat: 40.59g
                    <br>Sugar: 2.54g
                    <br>Saturated: 15.4g
                    <br>Protein: 44.15g
                    <br>Sodium: 271.58mg
                    <br>Cholesterol: 180.29mg
                    <br>Calorie: 573.86cal
                </span>
            </div>
            <div class="block1">
                <span class="blockTitle">Video</span>
                <br />
                <iframe width=80% height="350" src="https://www.youtube.com/embed/bEVhV5SgaZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div class="block2">
                <span class="blockTitle">Direction</span>
                <span class="stepsTitle">1. Preparation</span>
                <span class="stepsText">→ Combine paprika, garlic powder, salt and pepper in a small bowl. Pat the pork chops dry with kitchen paper then season generously with the spice mix. Heat olive oil and butter in a skillet over medium-high until butter is melted.
                </span>
                <span class="stepsTitle">2. Sear the pork chops</span>
                <span class="stepsText">→ Sear the pork chops for 3-5 minutes per side until well browned on both sides. Transfer the pork chops to a warm plate and set aside.
                </span>
                <span class="stepsTitle">3. Fry the mushrooms</span>
                <span class="stepsText">→ In the same skillet, add the mushrooms and stir fry until golden brown, scraping up any bits leftover from the chops.
                </span>
                <span class="stepsTitle">4. Sauce preparation</span>
                <span class="stepsText">→ Add garlic, parsley and Italian seasoning then stir fry for another 30 seconds before pouring in the broth. Add the cream, give a good stir then allow simmering for 3-4 minutes until slightly thickened and adjust seasoning if needed.
                </span>
                <span class="stepsTitle">5. Ending</span>
                <span class="stepsText">→ Place pork chops and their juices back into the sauce and allow to simmer for 2-3 minutes, or until the pork chops are cooked to your liking. Garnish with remaining fresh parsley and serve the garlic pork chops in creamy mushroom sauce immediately with cauliflower rice, zucchini noodles, or pasta. Enjoy!
                </span>
                <br />
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
