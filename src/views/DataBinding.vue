<template>
    <h1>hello {{ title }} !</h1>
    <div>
        <!-- "색깔넣을 때는 이거 하면 안돼" -->
        <div>{{ htmlString }}</div> 
        <!-- "이렇게 하면 됨" -->
        <div v-html="htmlString"></div>
    </div>
    <div>
        <input type="text" v-model="valueModel">
    </div>
    <div>
        <input type="number" v-model="valueModelNumber">
    </div>
    <div>
        <input type="textarea" v-model="valueModelTextArea">
    </div>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
    <div>
        <label>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no">
            {{ checked }}
        </label>
    </div>
    <div>
        <input type="checkbox" v-model="checkedCity" value="서울"> 서울
        <input type="checkbox" v-model="checkedCity" value="부산"> 부산
        <input type="checkbox" v-model="checkedCity" value="제주"> 젲주
    </div>
    <br>
    <span>체크한 지역 : {{ checkedCity }}</span>
    <div>
        <label>
            <input type="radio" v-bind:value="radioVal1" v-model="picked"> 서울
        </label>
        <label>
            <input type="radio" v-bind:value="radioVal2" v-model="picked"> 부산
        </label>
        <label>
            <input type="radio" v-bind:value="radioVal3" v-model="picked"> 제주
        </label>
        <br>
        <span>선택한 지역 : {{ picked }}</span>
    </div>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
    <!--버튼 disable -->
    <div>
        <input type="text" v-model="textDisable">
        <!--아 !! 요기 로직을 쓸 수 가 있구나??-->
        <button v-bind:disabled="textDisable == ''">btn</button>
    </div>

    <br>
    <br>
    <!--컨테이너-->
    <div class="container" v-bind:class="{
        'active': isActive, 'text-red': hasError
    }"> Class Binding

    </div>

    <!-- div 꾸미기-->
    <div v-bind:style="[baseStyle, addStyle]"> 인라인 스타일 바인딩
    </div>

    <!-- grid -->

    <div>
        <table>
            <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
            </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- 랜더링 expr visible-->
    <div>
        <h1 v-if="type == 'A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else>C</h1>
    </div>
    <div>
        <h1 v-show="typeShow == 'Q'">Q</h1>
        <h1 v-show="typeShow == 'W'">W</h1>
        <h1 v-show="typeShow == 'E'">E</h1>
    </div>
    
</template>
<script>
export default {
    components: {},
    data() {
        return {
            title: 'World',
            //htmlString: '<p style="color: red;" this is red string ></p>'
            htmlString: '<p style="color: red;">this is red string</p>',
            valueModel: 'South Korea',
            valueModelNumber : 3,
            valueModelTextArea : '@@@@@@@@@@@@@@@@@@@@@@@@@Text Area@@@@@@@@@@@@@@@@@@@@',
            city   : '064',
            checked:"yes",
            checkedCity:[],
            picked:'',
            radioVal1:'서울',
            radioVal2:'부산',
            radioVal3:'제주',
            imgSrc:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
            textDisable:"",
            isActive:true,
            hasError:false,
            baseStyle:{
                width: '500px',
                height: '200px',
            },
            addStyle:{
                color: 'red',
                fontSize: '20px'
            },
            productList:[
                {name: 'LG 그램', price: '200만원', category: '노트북', delivery: '무료'},
                {name: '삼성 노트북', price: '150만원', category: '노트북', delivery: '무료'},
                {name: '애플 맥북', price: '300만원', category: '노트북', delivery: '무료'},
                {name: '애플 아이패드', price: '100만원', category: '태블릿', delivery: '무료'},
                {name: '삼성 갤럭시', price: '150만원', category: '스마트폰', delivery: '무료'},
                {name: 'LG 벨벳', price: '100만원', category: '스마트폰', delivery: '무료'},
            ],
            type: 'C',
            typeShow: 'W'
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100px;
        height: 200px;
        background-color: #f0f0f0;
    }
    .active {
        background-color: yellow;
    }
    .text-red {
        color: red;
    }
    table {
        font-family: arial,sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #000000;
        text-align: center;
        /* padding: 8px; */
    }
</style>