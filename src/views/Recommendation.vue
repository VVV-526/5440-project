<template>
<div class="container-fluid1">
    <div class="d-lg-none">
        <div class="topBar2">
            <button class="return2" @click="$router.push('/filter')">
                <b-icon icon="arrow-left" scale="2"></b-icon>
            </button>
            <button class="fav2" @click="$router.push('/favorite')">my favorites
                <b-icon icon="heart-fill" scale="1" style="margin-left:2px;"></b-icon>
            </button>
            <br><br>
            <div>
                <span class="titleText2">Recommendations based on your selection</span>
            </div>
            <b-row style="margin-top: 15px; margin-left: 10px">
                <b-button size="sm" class="filteredTag" id="t1">Pork
                    <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t1')"></button>
                </b-button>
                <b-button size="sm" class="filteredTag" style="margin-left: 1%" id="t2">Garlic
                    <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t2')"></button>
                </b-button>
                <b-button size="sm" class="filteredTag" style="margin-left: 1%" id="t3">Scallion
                    <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t3')"></button>
                </b-button>
                <b-button size="sm" class="filteredTag" style="margin-left: 1%; font-size:20px;padding:0;width:5%; background-color:gray; color:white;" id="t4">+
                </b-button>
            </b-row>
            <b-row style="margin-top: 15px; margin-left: 10px; margin-bottom: 15px;">
                <select id="preference" class="selection2" @change="reFilter()">
                    <option value="None">None</option>
                    <option value="Time">Time</option>
                    <option value="Cost">Cost</option>
                    <option value="Difficulty">Difficulty</option>
                </select>
            </b-row>
        </div>
        <div class="boxContent">
            <div class="left2" id="left" @click="loadAndJump()">
                <div>
                    <b-row class="percentageText1_2">
                        <span style="font-weight: 600; font-size: 40px"> 100% </span>
                        <span style="font-size: 15px"> ingredients used </span>
                    </b-row>
                    <span class="recipeTitle1_2">{{this.recipeList['recipe1']['name']}}</span>
                    <div class="bottomText1">
                        <span> {{this.recipeList['recipe1']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe1']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe1']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe1']['people']}} </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="boxContent">
            <div class="upperRight">
                <div class="ubox" id="ubox" @click="loadAndJump2()">

                    <div class="percentageText2">
                        <span style="font-weight: 600; font-size: 25px"> 75% </span>

                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe2']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe2']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['people']}} </span>
                    </div>
                </div>
                <div class="ubox">

                    <div class="percentageText2">
                        <span style="font-weight: 600; font-size: 25px"> 50% </span>

                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe3']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe3']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['people']}} </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="boxContent">
            <div class="bottomRight">
                <div class="dbox">

                    <div class="percentageText2">
                        <span style="font-weight: 600; font-size: 25px"> 50% </span>
                    </div>

                    <span class="recipeTitle2">{{this.recipeList['recipe4']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe4']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['people']}} </span>
                    </div>
                </div>
                <div class="dbox">

                    <div class="percentageText2">
                        <span style="font-weight: 600; font-size: 25px"> 25% </span>
                    </div>

                    <span class="recipeTitle2">{{this.recipeList['recipe5']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe5']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['people']}} </span>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="topBar1  d-none d-lg-block">
        <br />
        <br />
        <button class="return" @click="$router.push('/filter')">
            <b-icon icon="arrow-left" scale="2.5"></b-icon>
        </button>
        <button class="fav1" @click="$router.push('/favorite')">
            my favorites
            <b-icon icon="heart-fill" scale="1.1" style="margin-left:3px;"></b-icon>
        </button>
        <div>
            <b-icon icon="grid1x2-fill" class="topIcon"></b-icon>
            <span class="titleText">Recommendations based on your selection</span>
        </div>
        <b-row style="margin-top: 6vh; margin-left: 9%">
            <b-button size="sm" class="filteredTag" id="t1">
                Pork
                <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t1')"></button>
            </b-button>
            <b-button size="sm" class="filteredTag" style="margin-left: 1%" id="t2">
                Garlic
                <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t2')"></button>
            </b-button>

            <b-button size="sm" class="filteredTag" style="margin-left: 1%" id="t3">
                Scallion
                <button type="button" class="btn-close" style="height: 12px; padding: 1; float: right; margin-left: 4px" aria-label="Close" @click="removeTag('t3')"></button>
            </b-button>

            <b-button size="sm" class="filteredTag" style="margin-left: 1%; font-size:20px;padding:0;width:3%; background-color:gray; color:white;" id="t4">
                +
            </b-button>
        </b-row>
        <select id="preference" class="selection" @change="reFilter()">
            <option value="None">None</option>
            <option value="Time">Time</option>
            <option value="Cost">Cost</option>
            <option value="Difficulty">Difficulty</option>
        </select>
        <br />
    </div>

    <div class="boxContent  d-none d-lg-block">
        <div class="left" id="left" @click="loadAndJump()">
            <div>
                <div class="circlePercentage1">
                    <div class="percentageText1">
                        <span style="font-weight: 600; font-size: 40px"> 100% </span>
                        <span style="font-size: 15px"> ingredients used </span>
                    </div>
                </div>
                <span class="recipeTitle1">{{this.recipeList['recipe1']['name']}}</span>
                <div class="bottomText1">
                    <span> {{this.recipeList['recipe1']['difficulty']}} </span>
                    <br />
                    <span> {{this.recipeList['recipe1']['cost']}} </span>
                    <br />
                    <span> {{this.recipeList['recipe1']['time']}} </span>
                    <br />
                    <span> {{this.recipeList['recipe1']['people']}} </span>
                </div>
            </div>

        </div>
        <div class="right">
            <div class="upperRight">
                <div class="ubox" id="ubox" @click="loadAndJump2()">
                    <div class="circlePercentage2">
                        <div class="percentageText2">
                            <span style="font-weight: 600; font-size: 25px"> 75% </span>
                        </div>
                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe2']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe2']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe2']['people']}} </span>
                    </div>
                </div>
                <div class="ubox">
                    <div class="circlePercentage2">
                        <div class="percentageText2">
                            <span style="font-weight: 600; font-size: 25px"> 50% </span>
                        </div>
                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe3']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe3']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe3']['people']}} </span>
                    </div>
                </div>
            </div>

            <div class="bottomRight">
                <div class="dbox">
                    <div class="circlePercentage2">
                        <div class="percentageText2">
                            <span style="font-weight: 600; font-size: 25px"> 50% </span>
                        </div>
                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe4']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe4']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe4']['people']}} </span>
                    </div>
                </div>
                <div class="dbox">
                    <div class="circlePercentage2">
                        <div class="percentageText2">
                            <span style="font-weight: 600; font-size: 25px"> 25% </span>
                        </div>
                    </div>
                    <span class="recipeTitle2">{{this.recipeList['recipe5']['name']}}</span>
                    <div class="bottomText2">
                        <span> {{this.recipeList['recipe5']['difficulty']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['cost']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['time']}} </span>
                        <br />
                        <span> {{this.recipeList['recipe5']['people']}} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Recommendation",
    data() {
        return {
            recipeList: {
                "recipe1": {
                    "name": "Braised Pork Belly",
                    "difficulty": "Easy",
                    "time": "~30 mins",
                    "cost": "~12$",
                    "people": "1-2 People"
                },
                "recipe2": {
                    "name": "Garlic Pork Chops",
                    "difficulty": "Easy",
                    "time": "~35 mins",
                    "cost": "~20$",
                    "people": "2-3 People"
                },
                "recipe3": {
                    "name": "Honey Garlic Pork Chops",
                    "difficulty": "Easy",
                    "time": "~20 mins",
                    "cost": "~15$",
                    "people": "2-3 People"
                },
                "recipe4": {
                    "name": "Sweet & Sour Fillet",
                    "difficulty": "Easy",
                    "time": "~35 mins",
                    "cost": "~20$",
                    "people": "1-2 People"
                },
                "recipe5": {
                    "name": "Char Siu (BBQ Pork)",
                    "difficulty": "Middle",
                    "time": "~40 mins",
                    "cost": "~25$",
                    "people": "1-2 People"
                }
            }
        };
    },
    methods: {
        removeTag(tid) {
            document.getElementById(tid).remove();
        },
        loadAndJump() {
            setTimeout(() => {
                this.$router.push('/recipe1');
            }, 500);
        },
        loadAndJump2() {
            setTimeout(() => {
                this.$router.push('/recipe2');
            }, 500);
        },
        reFilter() {
            var select = document.getElementById('preference');
            var value = select.options[select.selectedIndex].value;
            console.log(value);
        }
    },
};
</script>

<style>
.fav1 {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 40px;
    width: 150px;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.fav1:hover {
    background-color: #ffaa01;
    cursor: pointer;
}

.fav2 {
    position: absolute;
    top: 18px;
    right: 20px;
    height: 40px;
    width: 10%;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.fav2:hover {
    background-color: #ffaa01;
    cursor: pointer;
}

.boxContent {
    display: flex;
}

.right {
    display: flex;
    flex-direction: column;
    flex: 4;
    margin-left: 10px;
}

.upperRight {
    display: flex;
    flex-direction: row;
    flex: 4;
    margin-top: 10px;
}

.upperRight2 {
    display: flex;
    flex-direction: row;
    flex: 4;
    margin-top: 10px;
}

.bottomRight {
    display: flex;
    flex-direction: row;
    flex: 4;
    margin-top: 10px;
}

.box {
    padding-bottom: 50px;
}

.left {
    margin-top: 10px;
    height: 70vh;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r1.jpg");
    background-size: cover;
    background-position: center;
    flex: 4;
}

.left2 {
    margin-top: 10px;
    height: 350px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r1.jpg");
    background-size: cover;
    background-position: center;
    flex: 4;
}

div.left2:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.001);
    transition: 0.1s;
}

.ubox:nth-child(1) {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r.jpg");
    background-size: cover;
    background-position: center;
}

div.left:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.001);
    transition: 0.1s;
}

div.ubox:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.009);
    transition: 0.1s;
}

div.dbox:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.009);
    transition: 0.1s;
}

.ubox:nth-child(2) {
    width: 50%;
    margin-left: 15px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r4.jpg");
    background-size: cover;
    background-position: center;
}

.dbox:nth-child(1) {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r3.jpg");
    background-size: cover;
    background-position: center;
}

.dbox:nth-child(2) {
    width: 50%;
    margin-left: 15px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r2.jpg");
    background-size: cover;
    background-position: center;
}

.container-fluid1 {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
}

.topBar1 {
    background-color: #adc965;
    margin-top: 2vh;
    border-radius: 10px;
    height: 22vh;
    padding: 0;
    width: 100%;
    overflow: hidden;
}

.topBar2 {
    background-color: #adc965;
    margin-top: 2vh;
    border-radius: 10px;
    height: auto;
    padding: 0;
    width: 100%;
    overflow: hidden;
}

.titleText {
    position: absolute;
    top: 8vh;
    left: 10%;
    color: white;
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui;
    text-align: bottom;
}

.titleText2 {
    padding: 0px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui;
}

.topIcon {
    position: absolute;
    top: 9vh;
    left: 8%;
    color: white;
}

.return {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 40px;
    width: 50px;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.return:hover {
    background-color: #e4dadae5;
    color: white;
}

.return2 {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 40px;
    width: 50px;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.return2:hover {
    background-color: #e4dadae5;
    color: white;
}

.filteredTag {
    display: inline-block;
    position: relative;
    background-color: #eeeeee;
    border: 1px solid #918f8f00;
    color: #6b6b6b;
    border-radius: 5px;
    box-shadow: 1px 3px 3px 1px rgba(39, 39, 39, 0.2);
    height: 5vh;
    width: fit-content;
}

.dropDown {
    background-color: white;
    color: #ffaa01;
    position: absolute;
    right: 1vh;
    top: 5vh;
}

.circlePercentage1 {
    border-radius: 50%;
    width: 25vh;
    height: 25vh;
    margin-top: -6vh;
    margin-left: 90%;
    background-color: blanchedalmond;
    background-size: contain;
    position: relative;
    opacity: 1;
}

.circlePercentage2 {
    border-radius: 50%;
    width: 15vh;
    height: 15vh;
    margin-top: -4vh;
    margin-left: 88%;
    background-color: blanchedalmond;
    background-size: contain;
    position: relative;
    opacity: 0.9;
}

.recipeTitle1 {
    font-size: 42px;
    font-weight: 600;
    color: white;
    position: relative;
    margin-top: 37%;
    margin-left: 2%;
    float: left;
    text-shadow: 1px 1px #a0a0a0;
}

.recipeTitle1_2 {
    font-size: 24px;
    font-weight: 600;
    color: white;
    position: relative;
    margin-top: 10%;
    margin-left: 2%;
    float: left;
    text-shadow: 1px 1px #a0a0a0;
}

.recipeTitle2 {
    font-size: 17px;
    font-weight: 600;
    color: white;
    position: relative;
    margin-top: 25%;
    margin-left: 2%;
    float: left;
    text-shadow: 1px 1px #a0a0a0;
    bottom: 0;
}

.bottomText1 {
    font-size: 22px;
    color: white;
    position: relative;
    margin-top: 27%;
    float: right;
    margin-right: 3%;
    text-align: right;
    text-shadow: 1px 1px #a0a0a0;
}

.bottomText2 {
    font-size: 15px;
    color: white;
    position: relative;
    margin-top: 17%;
    float: right;
    margin-right: 3%;
    bottom: 0;
    text-align: right;
    text-shadow: 1px 1px #a0a0a0;
}

.percentageText1 {
    color: #ffaa01;
    position: relative;
    margin-top: 30%;
    float: right;
    margin-right: 5%;
    text-align: center;
    text-shadow: 1px 1px #a0a0a0;
}

.percentageText2 {
    color: #ffaa01;
    position: relative;
    margin-top: 38%;
    float: right;
    margin-right: 30%;
    text-align: center;
    text-shadow: 1px 1px #a0a0a0;
}

.selection {
    position: relative;
    margin-top: -5vh;
    margin-right: 10%;
    height: 5vh;
    float: right;
    width: 8%;
    border: 0;
    border-radius: 5px;
    color: #6b6b6b;
}

.selection2 {
    height: 30px;
    width: 100px;
    border: 0;
    border-radius: 5px;
    color: #6b6b6b;
}
</style>
