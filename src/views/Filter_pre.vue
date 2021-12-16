<template>
<div class="container-fluid-filter">
    <div class="row flex-xl-nowrap2">
        <column :sm="6" :md="6">
                <div class="sidebar">
                    <button class="myFav" @click="$router.push('/favorite')">
                        <b-icon icon="forward-fill" font-scale="1.25"></b-icon>My Favorites
                        <b-icon icon="heart-fill" scale="1.1" style="margin-left:3px;"></b-icon>
                    </button>
                    <a style="margin-top:10vh" :class="{active: active===1}" @click="scrollTo(1)">Vegetables / Meat</a>
                    <a :class="{active: active===2}" @click="scrollTo(2)">Fruit / Dairy & Eggs</a>
                    <a :class="{active: active===3}" @click="scrollTo(3)">Oils / Herb & Spices</a>
                    <a :class="{active: active===4}" @click="scrollTo(4)">Cheese / Nuts</a>
                </div>

        </column>
        <column :md="6">
            <div class="content_filter offset-md-2">
                <div class="topBar_filter">
                    <br />
                    <br />
                    <span class="topText">Choose the ingredients you want to use</span>
                    <br />
                    <b-row align-self="center">
                        <b-col>
                            <input class="searchBar" placeholder="Search for recipe...." v-model="inputTags" clearable />
                            <button class="searchButton" @click="loadAndJump">GO</button>
                        </b-col>
                    </b-row>
                </div>
                <div class="blocks">
                    <div class="cardContainer">
                        <b-row id="r1">
                            <b-card class="ingredientBox1">
                                <div class="circlePicture1"></div>
                                <div class="cardTitle">Vegetable</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="v1" @click="changeClass('v1')" value="Tomato">Tomato</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v2" @click="changeClass('v2')" value="Potato">Potato</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v3" @click="changeClass('v3')" value="Chili">Chili</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v4" @click="changeClass('v4')" value="Broccoli">Broccoli</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="v5" @click="changeClass('v5')" value="Onion">Onion</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v6" @click="changeClass('v6')" value="Eggplant">Eggplant</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v7" @click="changeClass('v7')" value="Asparagus">Asparagus</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="v8" @click="changeClass('v8')" value="Corn">Corn</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="v9" @click="changeClass('v9')" value="Bok Choy">Bok Choy</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v10" @click="changeClass('v10')" value="Spinach">Spinach</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v11" @click="changeClass('v11')" value="Carrot">Carrot</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="v12" @click="changeClass('v12')" value="Cabbage">Cabbage</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="v13" @click="changeClass('v13')" value="Ginger">Ginger</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v14" @click="changeClass('v14')" value="Leeks">Leeks</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="v15" @click="changeClass('v15')" value="Beans">Beans</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="v16" @click="changeClass('v16')" value="Squash">Squash</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="v17" @click="changeClass('v17')" value="Pumpkin">Pumpkin</button>
                            </b-card>
                            <b-card class="ingredientBox2">
                                <div class="circlePicture2"></div>
                                <div class="cardTitle">Meat & Seafood</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="m1" @click="changeClass('m1')" value="Chicken">Chicken</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m2" @click="changeClass('m2')" value="Beef">Beef</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m3" @click="changeClass('m3')" value="Bacon">Bacon</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m4" @click="changeClass('m4')" value="Salmon">Salmon</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m5" @click="changeClass('m5')" value="Ham">Ham</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="m6" @click="changeClass('m6')" value="Sausage">Sausage</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m7" @click="changeClass('m7')" value="Pork">Pork</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m8" @click="changeClass('m8')" value="Duck">Duck</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m9" @click="changeClass('m9')" value="Turkey">Turkey</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m10" @click="changeClass('m10')" value="Lamb">Lamb</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="m11" @click="changeClass('m11')" value="Spam">Spam</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m12" @click="changeClass('m12')" value="Steak">Steak</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m13" @click="changeClass('m13')" value="Scallops">Scallops</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m14" @click="changeClass('m14')" value="Oyster">Oyster</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m15" @click="changeClass('m15')" value="Cod">Cod</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="m16" @click="changeClass('m16')" value="Crab">Crab</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m17" @click="changeClass('m17')" value="Chicken Thighs">Chicken Thighs</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="m18" @click="changeClass('m18')" value="Chichken Wings">Chichken Wings</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="m19" @click="changeClass('m19')" value="Mussels">Mussels</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="m20" @click="changeClass('m20')" value="Lobster">Lobster</button>
                            </b-card>
                            <b-card class="selectedBox">
                                <div class="selectedTitle">Use it again</div>
                                <div class="selectedLine"></div>
                                <button class="lastTags" style="margin-top:6vh" id="u1" @click="changeClass('u1')" value="Pork">Pork</button>
                                <button class="lastTags" style="margin-left: 15px" id="u2" @click="changeClass('u2')" value="Rice">Rice</button>
                                <button class="lastTags" style="margin-left: 15px" id="u3" @click="changeClass('u3')" value="Egg">Egg</button>
                                <button class="lastTags" style="margin-top: 10px" id="u4" @click="changeClass('u4')" value="Buttermilk">Buttermilk</button>
                                <button class="lastTags" style="margin-left: 15px" id="u5" @click="changeClass('u5')" value="Garlic">Garlic</button>
                                <button class="lastTags" style="margin-top: 10px" id="u6" @click="changeClass('u6')" value="Scallion">Scallion</button>
                            </b-card>
                        </b-row>

                        <b-row id="r2">
                            <b-card class="ingredientBox1">
                                <div class="circlePicture3"></div>
                                <div class="cardTitle">Fruit</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="f1" @click="changeClass('f1')" value="Apple">Apple</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f2" @click="changeClass('f2')" value="Banana">Banana</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f3" @click="changeClass('f3')" value="Cherry">Cherry</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f4" @click="changeClass('f4')" value="Peach">Peach</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="f6" @click="changeClass('f6')" value="Kiwi">Kiwi</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f7" @click="changeClass('f7')" value="Orange">Orange</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f8" @click="changeClass('f8')" value="Watermelon">Watermelon</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f9" @click="changeClass('f9')" valule="Mango">Mango</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="f10" @click="changeClass('f10')" value="Strawberry">Strawberry</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f11" @click="changeClass('f11')" value="Coconut">Coconut</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f12" @click="changeClass('f12')" value="Lime">Lime</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f13" @click="changeClass('f13')" value="Lemon">Lemon</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="f14" @click="changeClass('f14')" value="Pineapple">Pineapple</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="f15" @click="changeClass('f15')" value="Blueberry">Blueberry</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f16" @click="changeClass('f16')" value="Raspberry">Raspberry</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="f5" @click="changeClass('f5')" value="Pear">Pear</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f17" @click="changeClass('f17')" value="Grape">Grape</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="f18" @click="changeClass('f18')" value="Dragon Fruit">Dragon Fruit</button>
                            </b-card>
                            <b-card class="ingredientBox2">
                                <div class="circlePicture4"></div>
                                <div class="cardTitle">Dairy & Eggs</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="d1" @click="changeClass('d1')">Butter</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d2" @click="changeClass('d2')">Egg</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d3" @click="changeClass('d3')">Cream</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d4" @click="changeClass('d4')">Milk</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d7" @click="changeClass('d7')">Whey</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="d6" @click="changeClass('d6')">Curd</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="d8" @click="changeClass('d8')">Ghee</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="d9" @click="changeClass('d9')">Ice Cream</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d15" @click="changeClass('d15')">Buttermilk</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="d10" @click="changeClass('d10')">Half and Half</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d11" @click="changeClass('d11')">Heavy Cream</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="d5" @click="changeClass('d5')">Yogurt</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="d12" @click="changeClass('d12')">Sour Cream</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="d13" @click="changeClass('d13')">Milk Powder</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="d14" @click="changeClass('d14')">Frosting</button>
                            </b-card>
                            <b-card class="selectedBox">
                                <div class="selectedTitle">Preference</div>
                                <div class="selectedLine"></div>
                                <b-form-group style="margin-top:25%" v-slot="{ ariaDescribedby }">
                                    <b-form-radio class="preference" v-model="preference" :aria-describedby="ariaDescribedby" name="some-radios" value="Time"><span style="margin-left:5px;">Time</span></b-form-radio>
                                    <b-form-radio class="preference" v-model="preference" :aria-describedby="ariaDescribedby" name="some-radios" value="Cost"><span style="margin-left:5px;">Cost</span></b-form-radio>
                                    <b-form-radio class="preference" v-model="preference" :aria-describedby="ariaDescribedby" name="some-radios" value="Nutrition"><span style="margin-left:5px;">Difficulty</span></b-form-radio>
                                    <b-form-radio class="preference" v-model="preference" :aria-describedby="ariaDescribedby" name="some-radios" value="None"><span style="margin-left:5px;">None</span></b-form-radio>
                                </b-form-group>
                            </b-card>
                        </b-row>

                        <b-row id="r3">
                            <b-card class="ingredientBox1">
                                <div class="circlePicture5"></div>
                                <div class="cardTitle">Oils</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="o1" @click="changeClass('o1')" value="Olive Oil">Olive Oil</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="o2" @click="changeClass('o2')" value="Sesame Oil">Sesame Oil</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="o3" @click="changeClass('o3')" value="Canola Oil">Canola Oil</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="o4" @click="changeClass('o4')" value="Peanut Oil">Peanut Oil</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="o5" @click="changeClass('o5')" value="Vegetable Oil">Vegetable Oil</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="o6" @click="changeClass('o6')" value="Coconut Oil">Coconut Oil</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="o7" @click="changeClass('o7')" value="Sunflower Oil">Sunflower Oil</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="o8" @click="changeClass('o8')" value="Cron Oil">Corn Oil</button>
                            </b-card>
                            <b-card class="ingredientBox2">
                                <div class="circlePicture6"></div>
                                <div class="cardTitle">Herbs & Spices</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="s1" @click="changeClass('s1')">Cinnamon</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s2" @click="changeClass('s2')">Cumin</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s3" @click="changeClass('s3')">Basil</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="s5" @click="changeClass('s5')">Parsley</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="s6" @click="changeClass('s6')">Oregano</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s7" @click="changeClass('s7')">Coriander</button>
                                <button class="unselectedTag" style="margin-left: 10px;" id="s8" @click="changeClass('s8')">Cayenne</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s4" @click="changeClass('s4')">Mint</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="s9" @click="changeClass('s9')">Thyme</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s10" @click="changeClass('s10')">Rosemary</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s11" @click="changeClass('s11')">Chive</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="s12" @click="changeClass('s12')">Dill</button>
                            </b-card>
                        </b-row>

                        <b-row id="r4">
                            <b-card class="ingredientBox1">
                                <div class="circlePicture7"></div>
                                <div class="cardTitle">Cheese</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="c1" @click="changeClass('c1')" value="Parmesan">Parmesan</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c2" @click="changeClass('c2')" value="Cheddar">Cheddar</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c3" @click="changeClass('c3')" value="Feda">Feta</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c4" @click="changeClass('c4')" value="Ricotta">Ricotta</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="c5" @click="changeClass('c5')" value="Mozzarella">Mozzarella</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c6" @click="changeClass('c6')" value="Goat Cheese">Goat Cheese</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c7" @click="changeClass('c7')" value="Gruyere">Gruyere</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px" id="c8" @click="changeClass('c8')" value="Swiss Cheese">Swiss Cheese</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c9" @click="changeClass('c9')" value="Blue Cheese">Blue Cheese</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="c10" @click="changeClass('c10')" value="Brie">Brie</button>
                            </b-card>
                            <b-card class="ingredientBox2">
                                <div class="circlePicture8"></div>
                                <div class="cardTitle">Nuts</div>
                                <div class="line"></div>
                                <button class="unselectedTag" style="margin-top:20%" id="n1" @click="changeClass('n1')" value="Almond">Almond</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n2" @click="changeClass('n2')" value="Pecan">Pecan</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n3" @click="changeClass('n3')" value="Walnut">Walnut</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n4" @click="changeClass('n4')" value="Sesame Seeds">Sesame Seeds</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="n5" @click="changeClass('n5')" value="Peanut">Peanut</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n6" @click="changeClass('n6')" value="Pistachio">Pistachio</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n7" @click="changeClass('n7')" value="Flax">Flax</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n8" @click="changeClass('n8')" value="Cashew">Cashew</button>
                                <br />
                                <button class="unselectedTag" style="margin-top: 15px;" id="n9" @click="changeClass('n9')" value="Chia">Chia</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n10" @click="changeClass('n10')" value="Pumkin Seeds">Pumpkin Seeds</button>
                                <button class="unselectedTag" style="margin-left: 10px" id="n11" @click="changeClass('n11')" value="Hazelnut">Hazelnut</button>
                            </b-card>
                        </b-row>
                    </div>
                </div>
            </div>
        </column>
    </div>
</div>
</template>

<script>
export default {
    name: "FilterPage",
    data() {
        return {
            preference: "None",
            inputTags: [],
            active: 1,
            value: ['apple', 'orange']
        };
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, false)
    },
    destroy() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        changeClass(bid) {
            var btn = document.getElementById(bid);
            var bInput = document.getElementById(bid).value;
            if (btn.className == "unselectedTag") {
                btn.className = "selectedTag";
                this.inputTags.push(" " + bInput)
            } else if (btn.className == "selectedTag") {
                btn.className = "unselectedTag";
                this.inputTags = this.inputTags.filter(function(e) { return e !== ' '+bInput })
            }
            if (btn.className == "lastTags") {
                btn.className = "selectedTag2";
                this.inputTags.push(" " + bInput)
            } else if (btn.className == "selectedTag2") {
                btn.className = "lastTags";
                this.inputTags = this.inputTags.filter(function(e) { return e !== ' '+bInput })
            }
            console.log(this.inputTags)
        },
        clearInput() {
            this.inputTags = [];
        },
        loadAndJump() {
            setTimeout(() => {
                this.$router.push('/recommendation');
            }, 500);
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
            const targetOffsetTop = document.querySelector('#r' + index).offsetTop
            console.log('#r' + index)
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
        },
    }
};
</script>

<style>
.content_filter {
    order: 1;
}
.container-fluid-filter {
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
.searchBar {
    margin-top: 1vh;
    width: 60%;
    height: 8vh;
    border-radius: 8px;
    border: 2px solid rgb(226, 224, 221);
    padding: 5px;
    font-family: system-ui;
    color: rgb(97, 96, 96);
}
.searchBar:focus {
    outline: none;
    border: 2px solid rgb(185, 179, 172);
}
.topBar_filter {
    background-color: #adc965;
    margin-top: 2vh;
    border-radius: 10px;
    height: 25vh;
    padding: 0;
    width: 100%;
}
.searchButton {
    width: 10%;
    margin-left: 10px;
    border-radius: 8px;
    background-color: #ffaa01;
    border: #ffaa01;
    color: white;
    height: 6vh;
    font-size: 20px;
    font-weight: 600;
    font-family: system-ui;
    box-shadow: 0 2px 4px 0 rgba(145, 144, 144, 0.2);
    cursor: pointer;
}
.searchButton:hover {
    background-color: white;
    color: #ffaa01;
    box-shadow: 0 3px 6px 0 rgba(117, 117, 117, 0.2),
        0 3px 6px 0 rgba(71, 71, 71, 0.19);
}
.topText {
    font-size: 25px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-family: system-ui;
    text-shadow: gray;
}
.blocks {
    background-color: white;
    padding: 0;
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.cardContainer {
    text-align: left;
    height: 97vh;
}
.ingredientBox1 {
    margin-left: 1%;
    margin-top: 15px;
    height: auto;
    width: 35.5%;
    display: inline-block;
    vertical-align: top;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
}
.ingredientBox2 {
    margin-top: 15px;
    margin-left: 2%;
    height: auto;
    width: 35.5%;
    display: inline-block;
    vertical-align: top;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
}
.selectedBox {
    margin-top: 15px;
    margin-left: 4%;
    width: 20%;
    height: 45vh;
    display: inline-block;
    vertical-align: top;
    position: relative;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
}
.cardTitle {
    color: #ffaa01;
    font-size: 20px;
    font-weight: 600;
    font-family: system-ui;
    position: absolute;
    top: 10px;
    right: 15px;
    width: 50%;
    text-align: right;
}
.selectedTitle {
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 600;
    font-family: system-ui;
    position: absolute;
    top: 10px;
    left: 20px;
    width: 50%;
}
.unselectedTag {
    margin-top: 5px;
    background-color: #fafafa;
    border: 1px solid #918f8f00;
    color: #6b6b6b;
    border-radius: 5px;
    box-shadow: 1px 3px 3px 1px rgba(39, 39, 39, 0.2);
    height: 5vh;
}
.unselectedTag:hover {
    background-color: rgb(218, 216, 216);
    color: rgb(126, 126, 126);
    box-shadow: 0 3px 6px 0 rgba(117, 117, 117, 0.2),
        0 3px 6px 0 rgba(71, 71, 71, 0.19);
}
.selectedTag {
    margin-top: 5px;
    border: 1px solid #918f8f00;
    border-radius: 5px;
    box-shadow: 1px 3px 3px 1px rgba(39, 39, 39, 0.2);
    background-color: #aaa9a9;
    color: #f4f4f4;
    border-radius: 5px;
    height: 5vh;
}
.lastTags {
    margin-top: 5px;
    background-color: #eeeeee;
    border: 1px solid #918f8f00;
    color: #a5a3a3;
    border-radius: 5px;
    height: 5vh;
}
.lastTags:hover {
    background-color: rgb(218, 216, 216);
    color: rgb(87, 85, 85);
    box-shadow: 0 3px 6px 0 rgba(117, 117, 117, 0.2),
        0 3px 6px 0 rgba(71, 71, 71, 0.19);
}
.selectedTag2 {
    margin-top: 5px;
    border: 1px solid #918f8f00;
    border-radius: 5px;
    box-shadow: 1px 3px 3px 1px rgba(39, 39, 39, 0.2);
    background-color: #aaa9a9;
    color: #f4f4f4;
    border-radius: 5px;
    height: 5vh;
}
.circlePicture1 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/vegetable.png');
    background-size: contain;
    position: absolute;
    z-index: 2;
}
.circlePicture2 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/meat.png');
    background-size: contain;
    position: absolute;
    z-index: 2;
}
.circlePicture3 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/fruit.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.circlePicture4 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/dairy.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.circlePicture5 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/oil.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.circlePicture6 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/spice.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.circlePicture7 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/cheese.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.circlePicture8 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -6vh;
    margin-left: -6vh;
    background-image: url('../assets/nuts.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
}
.line {
    width: 100%;
    border-bottom: 2px solid #adc965;
    position: absolute;
    top: 18%;
}
.selectedLine {
    width: 100%;
    border-bottom: 2px solid #d3d1d1;
    position: absolute;
    top: 15%;
    left: 5%;
    width: 90%;
}
.preference {
    margin-left: -5px;
    font-size: 15px;
    margin-top: 7px;
    color: #6b6b6b;
    font-family: system-ui;
}
.navigation {
    border-top: 20px solid #adc965;
    position: fixed;
    left: 0%;
    width: 220px;
    background-color: #ADC965;
}
.v li {
    color: white;
    padding: 0 30px;
    line-height: 2;
    font-size: 20px;
    font-weight: bold;
}
.navigation .active {
    color: #819611;
    background-color: #ADC965;
}
.navigation li:hover {
    background-color: #e4dadae5;
    color: white;
}
.sidebar {
    background-color: #ADC965;
    position: fixed;
    overflow: auto;
    height: 130vh;
}
/* Sidebar links */
.sidebar a {
    display: block;
    color: white;
    padding: 16px;
    text-decoration: none;
}
/* Active/current link */
.sidebar a.active {
    background-color: #89D5C9;
    color: white;
}
/* Links on mouse-over */
.sidebar a:hover:not(.active) {
    background-color: #89D5C9;
    color: white;
    cursor: pointer;
}
.myFav {
    margin-top: 17vh;
    font-size: 20px;
    font-weight: bold;
    color: white;
    height: 6vh;
    text-align: center;
    cursor: pointer;
    border: 0px;
    background-color: #ADC965;
    border-radius: 5px;
}
.myFav:hover {
    background-color: #ffaa01;
    color: white;
    font-size: 22px;
    cursor: pointer;
}
</style>