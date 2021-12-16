<template>
<div class="container-fluid1">
    <div class="topBar2">
        <br />
        <br />
        <button class="return2" @click="$router.go(-1)">
            <b-icon icon="arrow-left" scale="2.5"></b-icon>
        </button>
        <div>
            <b-icon icon="bookmark-heart-fill" class="topIcon2"></b-icon>
            <span class="titleText2">My Favorites</span>
        </div>
        <br />
    </div>
    <div class="boxContent2">
        <div class="right2">
            <div class="upperRight2" @click="loadAndJump()">
                <div class="ubox2">
                    <b-icon icon="heart-fill" class="favoriteIcon2"></b-icon>
                    <span class="recipeTitle2">Garlic Pork Chops</span>
                    <div class="bottomText2">
                        <span> Easy </span>
                        <br />
                        <span> ~20$ </span>
                        <br />
                        <span> ~30 mins </span>
                        <br />
                        <span> 2-3 People </span>
                    </div>
                </div>

                <div class="ubox2">
                    <b-icon icon="heart-fill" class="favoriteIcon2"></b-icon>
                    <span class="recipeTitle2">Honey Garlic Pork Chops</span>
                    <div class="bottomText2">
                        <span> Easy </span>
                        <br />
                        <span> ~15$ </span>
                        <br />
                        <span> ~30 mins </span>
                        <br />
                        <span> 2-3 People </span>
                    </div>
                </div>
            </div>

            <div class="bottomRight2">

                <div class="dbox2">
                    <b-icon icon="heart-fill" class="favoriteIcon2"></b-icon>
                    <span class="recipeTitle2">Sweet & Sour Fillet</span>
                    <div class="bottomText2">
                        <span> Easy </span>
                        <br />
                        <span> ~15$ </span>
                        <br />
                        <span> ~30 mins </span>
                        <br />
                        <span> 1-3 People </span>
                    </div>
                </div>

                <div class="dbox2">
                    <b-icon icon="heart-fill" class="favoriteIcon2"></b-icon>
                    <span class="recipeTitle2">Char Siu (BBQ Pork)</span>
                    <div class="bottomText2">
                        <span> Medium </span>
                        <br />
                        <span> ~20$ </span>
                        <br />
                        <span> ~60 mins </span>
                        <br />
                        <span> 2-4 People </span>
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
        return {};
    },
    methods: {
        removeTag(tid) {
            document.getElementById(tid).remove();
        },
        loadAndJump() {
            setTimeout(() => {
                this.$router.push('/recipe2');
            }, 500);
        },

    },
};
</script>

<style>

.container-fluid1 {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    height: 100%;
}

.topBar2 {
    background-color: #adc965;
    margin-top: 2vh;
    border-radius: 10px;
    height: 22vh;
    padding: 0;
    width: 100%;
}

.titleText2 {
    position: fixed;
    top: 8vh;
    left: 8%;
    color: white;
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui;
    text-align: bottom;
}

.topIcon2 {
    position: fixed;
    top: 9vh;
    left: 8%;
    color: white;
}

.return2 {
    position: absolute;
    top: 2vh;
    left: 15px;
    height: 8vh;
    width: 5%;
    color: white;
    border: none;
    background-color: #adc965;
    border-radius: 5px;
}

.returnButton2:hover {
    background-color: #e4dadae5;
    color: white;
}


.box2 {
    padding-bottom: 50px;
}

.boxContent2 {
    display: flex;
}

.right2 {
    display: flex;
    flex-direction: column;
    flex: 4;
}

.upperRight2 {
    display: flex;
    flex-direction: row;
    flex: 4;
    margin-top: 10px;
}

.bottomRight2 {
    display: flex;
    flex-direction: row;
    flex: 4;
    margin-top: 10px;
}

.ubox2:nth-child(1) {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r.jpg");
    background-size: cover;
    background-position: center;
}

.ubox2:nth-child(2) {
    width: 50%;
    margin-left: 15px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r4.jpg");
    background-size: cover;
    background-position: center;
}

.dbox2:nth-child(1) {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r3.jpg");
    background-size: cover;
    background-position: center;
}

.dbox2:nth-child(2) {
    width: 50%;
    margin-left: 15px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 2px 2px 1px rgba(70, 70, 70, 0.2);
    background-image: url("../assets/r2.jpg");
    background-size: cover;
    background-position: center;
}

div.ubox2:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.009);
    transition: 0.1s;
}

div.dbox2:hover {
    box-shadow: 2px 3px 3px 2px rgba(70, 70, 70, 0.2);
    cursor: pointer;
    transform: scaleX(1.009);
    transition: 0.1s;
}

.favoriteIcon2 {
    font-size: 30px;
    font-weight: 600;
    position: relative;
    margin-top: 2%;
    margin-left: 93%;
    float: left;
    color: #adc965;
}

.recipeTitle2 {
    font-size: 20px;
    font-weight: 600;
    color: white;
    position: relative;
    margin-top: 33%;
    margin-left: 2%;
    float: left;
    text-shadow: 1px 1px #a0a0a0;
    bottom: 0;
}

.bottomText2 {
    font-size: 15px;
    color: white;
    position: relative;
    margin-top: 25%;
    float: right;
    margin-right: 3%;
    bottom: 0;
    text-align: right;
    text-shadow: 1px 1px #a0a0a0;
}

</style>
