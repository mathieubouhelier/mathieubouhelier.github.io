(this["webpackJsonprecipes-app-test"]=this["webpackJsonprecipes-app-test"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profileIcon.74e487e5.svg"},,,,,,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/searchIcon.db812135.svg"},,function(e,t,a){e.exports=a.p+"static/media/drinkIcon.f87c47c3.svg"},function(e,t,a){e.exports=a.p+"static/media/exploreIcon.157945ff.svg"},function(e,t,a){e.exports=a.p+"static/media/mealIcon.b27ba19e.svg"},function(e,t,a){e.exports=a.p+"static/media/shareIcon.06215ed4.svg"},function(e,t,a){e.exports=a.p+"static/media/whiteHeartIcon.ea3b6ba8.svg"},function(e,t,a){e.exports=a.p+"static/media/blackHeartIcon.b8913346.svg"},,,function(e,t,a){e.exports=a(59)},,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),o=a(3),l=a(2),s=a(5),u=(a(47),a(6)),d=function(e){return{type:"CHANGE_LOCATION",payload:e}},E=(a(48),Object(l.b)(null,(function(e){return{saveMail:function(t){return e(function(e){return{type:"SAVE_EMAIL",payload:e}}(t))}}}))((function(e){var t=e.saveMail,a=Object(n.useState)(!1),r=Object(u.a)(a,2),i=r[0],l=r[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),E=d[0],m=d[1],p=Object(n.useState)(""),b=Object(u.a)(p,2),h=b[0],f=b[1];return c.a.createElement("div",{className:"login-container"},c.a.createElement("div",{className:"simple-login-container"},c.a.createElement("h2",null,"Login"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 form-group"},c.a.createElement("input",{className:"form-control",type:"email","data-testid":"email-input",placeholder:"Email",onChange:function(e){return function(e){f(e);return e.match(/[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i)?l(!0):l(!1)}(e.target.value)}}),!i&&c.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"Please enter a valid email address."))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 form-group"},c.a.createElement("input",{className:"form-control",type:"password","data-testid":"password-input",placeholder:"Senha",onChange:function(e){return e.target.value.length>5?m(!0):m(!1)}}),!E&&c.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"the password must be at least 6 characters long."))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 form-group"},c.a.createElement(o.b,{to:"/comidas"},c.a.createElement("button",{type:"button",className:"btn btn-block btn-login","data-testid":"login-submit-btn",disabled:!i||!E,onClick:function(){return localStorage.setItem("mealsToken","1"),localStorage.setItem("cocktailsToken","1"),localStorage.setItem("user",JSON.stringify({email:h})),void t(h)}},"Entrar"))))))}))),m=a(13),p=a.n(m),b=a(28),h=a.n(b),f=(a(50),Object(l.b)(null,(function(e){return{changeIsVisible:function(){return e({type:"CHANGE_VISIBILITY"})}}}))((function(e){var t=e.changeIsVisible,a=e.title;return c.a.createElement("header",{className:"header-foods-drinks"},c.a.createElement(o.b,{to:"/perfil"},c.a.createElement("img",{src:p.a,alt:"Profile Icon","data-testid":"profile-top-btn"})),c.a.createElement("h3",{"data-testid":"page-title"},a),c.a.createElement("input",{type:"image",onClick:function(){return t()},src:h.a,alt:"Search Icon","data-testid":"search-top-btn"}))}))),g=a(17),I=a(1),O=a(23),v=a.n(O),R=a(29);function _(e){return j.apply(this,arguments)}function j(){return(j=Object(R.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("API getbyRecipes",t),e.abrupt("return",fetch(t).then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return function(t,a){var n=a().updateLocation.currentLocation;return t({type:"REQUEST_THEMEALAPI"}),function(e,t){var a="/comidas"===t?"themeal":"thecocktail",n="";switch(e.searchOption){case"ingredient":n="https://www.".concat(a,"db.com/api/json/v1/1/filter.php?i=").concat(e.searchedValue);break;case"name":n="https://www.".concat(a,"db.com/api/json/v1/1/search.php?s=").concat(e.searchedValue);break;case"firstLetter":n="https://www.".concat(a,"db.com/api/json/v1/1/search.php?f=").concat(e.searchedValue);break;case"category":n="https://www.".concat(a,"db.com/api/json/v1/1/filter.php?c=").concat(e.searchedValue);break;case"area":n="https://www.".concat(a,"db.com/api/json/v1/1/filter.php?a=").concat(e.searchedValue);break;default:n="https://www.".concat(a,"db.com/api/json/v1/1/search.php?s=").concat(e.searchedValue)}return _(n)}(e,n).then((function(e){return t(function(e){return{type:"RECEIVE_THEMEALAPI_SUCCESS",payload:e}}(e))}),(function(e){return t(function(e){return{type:"RECEIVE_THEMEALAPI_FAILURE",payload:e}}(e.message))}))}}var y=function(e,t,a){a(Object(I.a)(Object(I.a)({},t),{},Object(g.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(l.d)((function(e){return e.ThemealDB})).recipes,t=Object(l.d)((function(e){return e.updateLocation})).currentLocation,a=Object(n.useState)({searchedValue:"",searchOption:"",recipesEqualOne:!1,recipeId:""}),r=Object(u.a)(a,2),i=r[0],o=r[1],d=Object(l.c)(),E=function(e,t){var a;return"/comidas"===e&&(a="/comidas/".concat(t)),"/bebidas"===e&&(a="/bebidas/".concat(t)),a}(t,i.recipeId);Object(n.useEffect)((function(){d({type:"REQUEST_RESET_FETCH_STATE"}),o(Object(I.a)(Object(I.a)({},i),{},{recipesEqualOne:!1}))}),[]),Object(n.useEffect)((function(){!function(e,t,a,n){if(null==e)return t({type:"REQUEST_RESET_RECIPES_STATE"}),alert("Sinto muito, n\xe3o encontramos nenhuma receita para esses filtros.");if(1===e.length){var c="".concat(e[0][Object.keys(e[0])[0]]);return n(Object(I.a)(Object(I.a)({},a),{},{recipesEqualOne:!0,recipeId:c}))}e.length>1&&t({type:"SEARCH_RESULT_MORE_ONE"})}(e,d,i,o)}),[e]);return c.a.createElement("div",{className:"container-fluid justify-content-center"},i.recipesEqualOne?c.a.createElement(s.a,{push:!0,to:"".concat(E)}):null,function(e,t){return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"searchInput"},c.a.createElement("input",{className:"form-control",name:"searchedValue",type:"text",value:e.searchedValue,"data-testid":"search-input",placeholder:"Digit aqui sua busca",onChange:function(a){return y(a,e,t)}})))}(i,o),function(e,t){return c.a.createElement("form",null,[{label:"ingredient",value:"ingredient",testid:"ingredient-search-radio"},{label:"Nome",value:"name",testid:"name-search-radio"},{label:"Primeira letra",value:"firstLetter",testid:"first-letter-search-radio"}].map((function(a){return c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("label",{className:"form-check-label",htmlFor:"searchedOption",key:a.label},a.label,c.a.createElement("input",{className:"form-check-input",name:"searchOption",type:"radio",value:a.value,"data-testid":a.testid,onChange:function(a){return y(a,e,t)}})))})))}(i,o),c.a.createElement("button",{className:"btn btn-info","data-testid":"exec-search-btn",onClick:function(){"firstLetter"===i.searchOption&&i.searchedValue.length>1?alert("Sua busca deve conter somente 1 (um) caracter"):d(A(i))}},"search"))},C=(a(19),Object(l.b)((function(e){return{recipes:e.ThemealDB.recipes,currentLocation:e.updateLocation.currentLocation}}),null)((function(e){var t=e.recipes,a=e.currentLocation,n="/comidas"===a?"Meal":"Drink",r=function(e,t){return"/comidas"===t?e.idMeal:e.idDrink};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{class:"row justify-content-center mt-3"},t.slice(0,12).map((function(e,t){return c.a.createElement("div",{class:"card text-center card-custom mx-2 mb-3",style:{width:"18rem"}},c.a.createElement(o.b,{to:"".concat(a,"/").concat(r(e,a))},c.a.createElement("div",{key:e["id".concat(n)],"data-testid":"".concat(t,"-recipe-card")},c.a.createElement("img",{"data-testid":"".concat(t,"-card-img"),src:e["str".concat(n,"Thumb")],alt:"".concat(n," Card"),className:"card-img-top"}),c.a.createElement("div",{class:"card-body"},c.a.createElement("h4",{"data-testid":"".concat(t,"-card-name"),className:"card-title text-secondary"},e["str".concat(n)])))))}))))}))),T=Object(l.b)((function(e){return{categories:e.CategoriesReducer.categories}}),null)((function(e){var t=e.categories,a=Object(l.c)(),r=Object(n.useState)(""),i=Object(u.a)(r,2),o=i[0],s=i[1],d=function(e){s(e),function(e){o===e?(a(A({searchedValue:""})),s("")):a(A({searchOption:"category",searchedValue:e}))}(e)};return c.a.createElement("div",{className:"btn-group flex-wrap container-fluid mt-2 mb-1",role:"group"},c.a.createElement("button",{className:"btn btn-outline-info","data-testid":"All-category-filter",type:"button",onClick:function(){return a(A({searchedValue:""}))}},"All"),t.slice(0,5).map((function(e){return c.a.createElement("button",{className:"btn btn-info","data-testid":"".concat(e.strCategory,"-category-filter"),key:e.strCategory,value:e.strCategory,type:"button",onClick:function(e){return d(e.target.value)}},e.strCategory)})))})),N=a(30),F=a.n(N),w=a(31),L=a.n(w),D=a(32),k=a.n(D),V=(a(52),function(){return c.a.createElement("footer",{"data-testid":"footer",className:"footer"},c.a.createElement(o.b,{to:"/bebidas"},c.a.createElement("img",{"data-testid":"drinks-bottom-btn",src:F.a,alt:"Drink Icon"})),c.a.createElement(o.b,{to:"/explorar"},c.a.createElement("img",{"data-testid":"explore-bottom-btn",src:L.a,alt:"Explore Icon"})),c.a.createElement(o.b,{to:"/comidas"},c.a.createElement("img",{"data-testid":"food-bottom-btn",src:k.a,alt:"Meal Icon"})))});function x(){return function(e,t){var a=t().updateLocation.currentLocation;return e({type:"REQUEST_CATEGORIESAPI"}),function(e){return _("https://www.".concat("/comidas"===e?"themeal":"thecocktail","db.com/api/json/v1/1/list.php?c=list"))}(a).then((function(t){return e(function(e){return{type:"RECEIVE_CATEGORIESAPI_SUCCESS",payload:e}}(t))}),(function(t){return e(function(e){return{type:"RECEIVE_CATEGORIESAPI_FAILURE",payload:e}}(t.message))}))}}var U=Object(l.b)((function(e){return{searchBarVisible:e.searchBar.isVisible,isFetching:e.ThemealDB.isFetching,recipes:e.ThemealDB.recipes,isFetchingCategories:e.CategoriesReducer.isFetchingCategories,categories:e.CategoriesReducer.categories,isFetchByIngredient:e.ThemealDB.isFetchByIngredient}}),(function(e){return{saveLocation:function(t){return e(d(t))}}}))((function(e){var t=e.searchBarVisible,a=e.isFetching,r=e.saveLocation,i=e.isFetchingCategories,o=e.categories,s=e.recipes,u=e.isFetchByIngredient,d=Object(l.c)();return Object(n.useEffect)((function(){r(window.location.pathname),d(x()),u||d(A({searchedValue:""})),d({type:"CHANGE_FETCH_BY_INGREDIENT"})}),[]),c.a.createElement("div",null,c.a.createElement(f,{title:"Comidas"}),!i&&o.length>0&&c.a.createElement(T,null),t&&c.a.createElement(S,null),a&&"Loading...",!a&&null!==s&&c.a.createElement(C,null),c.a.createElement(V,null))})),P=Object(l.b)((function(e){return{searchBarVisible:e.searchBar.isVisible,isFetching:e.ThemealDB.isFetching,recipes:e.ThemealDB.recipes,isFetchingCategories:e.CategoriesReducer.isFetchingCategories,categories:e.CategoriesReducer.categories,isFetchByIngredient:e.ThemealDB.isFetchByIngredient}}),(function(e){return{saveLocation:function(t){return e(d(t))}}}))((function(e){var t=e.searchBarVisible,a=e.isFetching,r=e.saveLocation,i=e.isFetchingCategories,o=e.categories,s=e.recipes,u=e.isFetchByIngredient,d=Object(l.c)();return Object(n.useEffect)((function(){r(window.location.pathname),d(x()),u||d(A({searchedValue:""})),d({type:"CHANGE_FETCH_BY_INGREDIENT"})}),[]),c.a.createElement("div",null,c.a.createElement(f,{title:"Bebidas"}),!i&&o.length>0&&c.a.createElement(T,null),t&&c.a.createElement(S,null),a&&"Loading...",!a&&null!==s&&c.a.createElement(C,null),c.a.createElement(V,null))})),B=function(){return{type:"REQUEST_DETAIL_ID_API"}};function M(e){return function(t,a){var n=a().updateLocation.currentLocation;return t(B),function(e,t){return _("https://www.".concat("/comidas"===t?"themeal":"thecocktail","db.com/api/json/v1/1/lookup.php?i=").concat(e.searchedValue))}(e,n).then((function(e){return t(function(e){return{type:"RECEIVE_DETAIL_ID_API_SUCCESS",payload:e}}(e))}),(function(e){return t(function(e){return{type:"RECEIVE_DETAIL_ID_API_FAILURE",payload:e}}(e.message))}))}}var H=function(){return{type:"REQUEST_DETAIL_RECOMAND_API"}};function G(e){return function(t){return t(H),function(e){var t="";switch(e.searchOption){case"recommendation_drink":t="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";break;case"recommendation_food":t="https://www.themealdb.com/api/json/v1/1/search.php?s=";break;default:t="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="}return _(t)}(e).then((function(e){return t(function(e){return{type:"RECEIVE_DETAIL_RECOMAND_API_SUCCESS",payload:e}}(e))}),(function(e){return t(function(e){return{type:"RECEIVE_DETAIL_RECOMAND_API_FAILURE",payload:e}}(e.message))}))}}a(26);var Q=a(33),J=a.n(Q),Y=a(53),z=function(e){var t="share-btn";"undefined"!==typeof e.testid&&(t="".concat(e.testid,"-horizontal-share-btn"));var a=window.location.pathname;"undefined"!==typeof e.idInput&&(a="/".concat(e.type,"/").concat(e.idInput));var r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1];return c.a.createElement("div",null,c.a.createElement("input",{type:"image","data-testid":t,className:"share-fav-buttons",onClick:function(){return Y("http://localhost:3000".concat(a)),void l(!0)},src:J.a,alt:"Share Button"}),o&&c.a.createElement("span",null,"Link copiado!"))},q=a(34),Z=a.n(q),W=a(35),K=a.n(W),X=function(e,t,a,n){!0===e?function(e,t){t({type:"REQUEST_FAVORITE_FETCHING"});var a=e.recipe[0][Object.keys(e.recipe[0])[0]],n=JSON.parse(localStorage.getItem("favoriteRecipes")).filter((function(e){return e.id!==a}));localStorage.setItem("favoriteRecipes",JSON.stringify(n)),t({type:"RECEIVE_FAVORITE_FETCHING_SUCCESS"})}(a,n):function(e,t){var a=e.recipeType,n=e.recipe[0],c="",r="",i="comida";"Meal"===a?r=n.strArea:(c=n.strAlcoholic,i="bebida");var o={id:n["id".concat(a)],type:i,area:r,category:n.strCategory,alcoholicOrNot:c,name:n["str".concat(a)],image:n["str".concat(a,"Thumb")]};t({type:"REQUEST_FAVORITE_FETCHING"});var l=JSON.parse(localStorage.getItem("favoriteRecipes"));null===l?l=[o]:l.push(o),localStorage.setItem("favoriteRecipes",JSON.stringify(l)),t({type:"RECEIVE_FAVORITE_FETCHING_SUCCESS"})}(a,n),t(!e)},$=function(e){var t="favorite-btn";"undefined"!==typeof e.testid&&(t="".concat(e.testid,"-horizontal-favorite-btn"));var a=Object(l.c)(),r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],s=i[1],d=o?K.a:Z.a;return Object(n.useEffect)((function(){!function(e,t,a){var n=e.recipe[0][Object.keys(e.recipe[0])[0]],c=JSON.parse(localStorage.getItem("favoriteRecipes"));null===c&&(c=[""]),c.map((function(e){return e.id===n&&a(!0),null}))}(e,0,s)}),[]),c.a.createElement("input",{type:"image","data-testid":t,className:"share-fav-buttons",onClick:function(){return X(o,s,e,a)},src:d,alt:"Favorite Button"})},ee=Object(l.b)((function(e){return{recipe:e.DetailReducer.id,currentLocation:e.updateLocation.currentLocation}}),null)((function(e){var t=e.recipe,a=e.currentLocation,n="/comidas"===a?"Meal":"Drink",r="/comidas"===a?"Category":"Alcoholic";return c.a.createElement("div",null,c.a.createElement(z,{type:a.slice(1),idInput:Object.values(t[0])[0]}),c.a.createElement($,{recipe:t,recipeType:n}),t.map((function(e){return c.a.createElement("div",{key:e["id".concat(n)]},c.a.createElement("div",null,c.a.createElement("img",{"data-testid":"recipe-photo",src:e["str".concat(n,"Thumb")],alt:"".concat(n," Card"),className:"recipe-photo"}),c.a.createElement("h1",{"data-testid":"recipe-title"},e["str".concat(n)]),c.a.createElement("h4",{"data-testid":"recipe-category"},e["str".concat(r)])),c.a.createElement("h3",null,"Instructions"),c.a.createElement("p",{"data-testid":"instructions"},e.strInstructions))})))})),te=[],ae=[],ne=function(e){!function(e){Object.keys(e[0]).forEach((function(t){t.includes("strIngredient")&&""!==e[0][t]&&null!==e[0][t]&&te.push(e[0][t])}))}(e),function(e){Object.keys(e[0]).forEach((function(t){t.includes("strMeasure")&&" "!==e[0][t]&&null!==e[0][t]&&ae.push(e[0][t])}))}(e);var t={};return te.forEach((function(e,a){return t[e]=ae[a]})),t},ce=Object(l.b)((function(e){return{recipe:e.DetailReducer.id}}),null)((function(e){var t=e.recipe;return Object.entries(ne(t)).map((function(e,t){return c.a.createElement("p",{"data-testid":"".concat(t,"-ingredient-name-and-measure")},"".concat(e[0]," ").concat(e[1]))}))})),re=Object(l.b)((function(e){return{recipe:e.DetailReducer.id}}),null)((function(e){var t=e.recipe;return c.a.createElement("div",null,c.a.createElement("h3",null,"Video"),c.a.createElement("embed",{"data-testid":"video",src:t[0].strYoutube.replace("watch?v=","embed/"),width:"250",height:"200"}))})),ie=Object(l.b)((function(e){return{recomendation:e.DetailReducer.recomendation,currentLocation:e.updateLocation.currentLocation}}),null)((function(e){var t=e.recomendation,a=e.currentLocation,r=Object(n.useState)(1),i=Object(u.a)(r,2),o=i[0],l=i[1],s="/comidas"===a?"Drink":"Meal";return c.a.createElement("div",{className:"recomendationContainer"},c.a.createElement("button",{className:"btn btn-info mt-2",disabled:1===o,onClick:function(){return l(o-1)}},"<"),t.slice(0,6).map((function(e,t){return c.a.createElement("div",{key:e["id".concat(s)],style:{display:o===t||o===t+1?"":"none"},className:"reconedationCard"},c.a.createElement("img",{"data-testid":"".concat(t,"-recomendation-card"),src:e["str".concat(s,"Thumb")],alt:"".concat(s," Card"),className:"recipe-photo"}),c.a.createElement("h3",{"data-testid":"".concat(t,"-recomendation-title")},e["str".concat(s)]))})),c.a.createElement("button",{className:"btn btn-info mt-2",disabled:5===o,onClick:function(){return l(o+1)}},">"))})),oe=(a(54),Object(l.b)((function(e){return{btnStart:e.startRecipe.startRecipe,currentLocation:e.updateLocation.currentLocation}}),null)((function(e){var t=e.btnStart,a=e.currentLocation,n=Object(l.c)(),r=!1===t?"Iniciar Receita":"Continuar Receita",i=window.location.pathname.slice(9),s="/comidas"===a?"/comidas":"/bebidas";return c.a.createElement(o.b,{to:"".concat(s,"/").concat(i,"/in-progress")},c.a.createElement("button",{type:"button","data-testid":"start-recipe-btn",className:"btn btn-info",onClick:function(){return n({type:"CHANGE_BTN_START"})}},r))}))),le=Object(l.b)((function(e){return{currentLocation:e.updateLocation.currentLocation,recipe:e.DetailReducer.id,recomendation:e.DetailReducer.recomendation}}),null)((function(e){var t=e.currentLocation,a=e.recipe,r=e.recomendation,i=Object(l.c)();Object(n.useEffect)((function(){i(d(window.location.pathname.slice(0,8)));var e="/comidas"===window.location.pathname.slice(0,8)?"recommendation_drink":"recommendation_food";i(G({searchOption:e})),i(M({searchOption:"idRecipe",searchedValue:window.location.pathname.slice(9)}))}),[]);var o="/comidas"===t?"Meal":"Drink";return c.a.createElement("div",{className:"container"},a.length>0&&c.a.createElement(ee,null),a.length>0&&c.a.createElement(ce,null),c.a.createElement(oe,null),"Meal"===o&&a.length>0&&c.a.createElement(re,null),r.length>0&&c.a.createElement(ie,null))})),se=Object(l.b)((function(e,t){var a=t.match.params.id;return{recipe:e.DetailReducer.id,recipeID:a}}),null)((function(e){var t=e.recipe,a=e.recipeID,r=Object(l.c)();Object(n.useEffect)((function(){r(d(window.location.pathname.slice(0,8))),0===t.length&&r(M({searchOption:"idRecipe",searchedValue:a}))}),[]);return c.a.createElement("div",{className:"container"},t.length>0&&c.a.createElement(ee,null),t.length>0&&Object.entries(ne(t)).map((function(e,t){return c.a.createElement("div",{"data-testid":"".concat(t,"-ingredient-step"),className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"".concat(e[0]," - ").concat(e[1])}),"".concat(e[0]," - ").concat(e[1]),c.a.createElement("label",{className:"form-check-label",htmlFor:"".concat(e[0]," - ").concat(e[1]),key:"".concat(e[0]," - ").concat(e[1])}))})),c.a.createElement(o.b,{to:"/receitas-feitas"},c.a.createElement("button",{className:"btn btn-info",type:"button","data-testid":"finish-recipe-btn"},"Finalizar Receita")))})),ue=(a(55),function(e){var t=e.title;return c.a.createElement("header",{className:"header-explore"},c.a.createElement(o.b,{to:"/perfil"},c.a.createElement("img",{src:p.a,alt:"Profile Icon","data-testid":"profile-top-btn"})),c.a.createElement("h3",{"data-testid":"page-title"},t))}),de=function(){return c.a.createElement("div",null,c.a.createElement(ue,{title:"Receitas Feitas"}))},Ee=function(){var e=Object(l.d)((function(e){return e.FavoritesReducer})).favoriteListFetching,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],i=a[1];Object(n.useEffect)((function(){i(JSON.parse(localStorage.getItem("favoriteRecipes")))}),[e]);var s=Object(n.useState)(""),d=Object(u.a)(s,2),E=d[0],m=d[1];return c.a.createElement("div",null,c.a.createElement(ue,{title:"Receitas Favoritas"}),function(e,t){return c.a.createElement("div",null,[{label:"Meal",value:"comida",testid:"filter-by-food-btn"},{label:"Drink",value:"bebida",testid:"filter-by-drink-btn"},{label:"All",value:"",testid:"filter-by-all-btn"}].map((function(e){return c.a.createElement("button",{key:e.label,name:"filterValue",value:e.value,"data-testid":e.testid,onClick:function(e){return t(e.target.value)}},e.label)})))}(0,m),c.a.createElement("div",null,null!=r&&r.filter((function(e){return e.type.includes(E)})).map((function(e,t){return c.a.createElement("div",null,c.a.createElement($,{testid:t,recipe:[{id:e.id}]}),c.a.createElement(z,{idInput:e.id,testid:t,type:"".concat(e.type,"s")}),"comida"===e.type&&c.a.createElement("h4",{"data-testid":"".concat(t,"-horizontal-top-text")},"".concat(e.area," - ").concat(e.category)),"bebida"===e.type&&c.a.createElement("h4",{"data-testid":"".concat(t,"-horizontal-top-text")},e.alcoholicOrNot),c.a.createElement(o.b,{to:"/".concat(e.type,"s/").concat(e.id)},c.a.createElement("h3",{"data-testid":"".concat(t,"-horizontal-name")},e.name),c.a.createElement("img",{"data-testid":"".concat(t,"-horizontal-image"),src:e.image,alt:e.name,className:"recipe-photo"})))}))))},me=function(){return c.a.createElement("div",null,c.a.createElement(ue,{title:"Explorar"}),c.a.createElement("div",{className:"row justify-content-around mt-2"},c.a.createElement(o.b,{to:"/explorar/comidas"},c.a.createElement("button",{type:"button","data-testid":"explore-food",className:"btn btn-info"},"Explorar Comidas")),c.a.createElement(o.b,{to:"/explorar/bebidas"},c.a.createElement("button",{type:"button","data-testid":"explore-drinks",className:"btn btn-info"},"Explorar Bebidas"))),c.a.createElement(V,null))};function pe(e){return function(t){return t({type:"REQUEST_RANDOM_API"}),function(e){return _("https://www.".concat("/comidas"===e?"themeal":"thecocktail","db.com/api/json/v1/1/random.php"))}(e).then((function(e){return t(function(e){return{type:"RECEIVE_RANDOM_API_SUCCESS",payload:e}}(e))}),(function(e){return t(function(e){return{type:"RECEIVE_RANDOM_API_FAILURE",payload:e}}(e.message))}))}}var be=Object(l.b)((function(e){return{id:e.DetailReducer.id,isFetchingRandom:e.DetailReducer.isFetchingRandom}}),null)((function(e){var t=e.id,a=e.isFetchingRandom,r=Object(n.useState)(!1),i=Object(u.a)(r,2),d=i[0],E=i[1],m=Object(l.c)(),p=window.location.pathname.slice(9,17),b=window.location.pathname,h="/explorar/comidas"===b?"Meal":"Drink",f="/explorar/comidas"===b?"Explorar Comidas":"Explorar Bebidas";return d&&!a?c.a.createElement(s.a,{to:"".concat(p,"/").concat(t[0]["id".concat(h)])}):c.a.createElement("div",null,c.a.createElement(ue,{title:f}),c.a.createElement("div",{className:"row justify-content-around"},c.a.createElement(o.b,{to:"".concat(b,"/ingredientes")},c.a.createElement("button",{type:"button","data-testid":"explore-by-ingredient",className:"btn btn-info mt-2"},"Por Ingredientes")),"/explorar/comidas"===b&&c.a.createElement(o.b,{to:"".concat(b,"/area")},c.a.createElement("button",{type:"button","data-testid":"explore-by-area",className:"btn btn-info mt-2"},"Por Local de Origem")),c.a.createElement("button",{className:"btn btn-info mt-2",type:"button","data-testid":"explore-surprise",onClick:function(){return E(!0),void m(pe(p))}},"Me Surpreenda!")),c.a.createElement(V,null))}));function he(){return function(e,t){var a=t().updateLocation.currentLocation;return e({type:"REQUEST_INGREDIENTS_API"}),function(e){return _("https://www.".concat("/comidas"===e?"themeal":"thecocktail","db.com/api/json/v1/1/list.php?i=list"))}(a).then((function(t){return e(function(e){return{type:"RECEIVE_INGREDIENTS_API_SUCCESS",payload:e}}(t))}),(function(t){return e(function(e){return{type:"RECEIVE_INGREDIENTS_API_FAILURE",payload:e}}(t.message))}))}}var fe=Object(l.b)((function(e){return{isFetchingIngredients:e.IngredientsReducer.isFetchingIngredients,ingredients:e.IngredientsReducer.ingredients,isFetchByIngredient:e.ThemealDB.isFetchByIngredient,isFetchingRecipes:e.ThemealDB.isFetching}}),null)((function(e){var t=e.isFetchingIngredients,a=e.ingredients,r=e.isFetchByIngredient,i=e.isFetchingRecipes,u=Object(l.c)();Object(n.useEffect)((function(){u(d(window.location.pathname.slice(9,17))),u(he())}),[]);var E,m="/comidas"===window.location.pathname.slice(9,17)?"themeal":"thecocktail",p="/comidas"===window.location.pathname.slice(9,17)?"Ingredient":"Ingredient1";return r&&!i?c.a.createElement(s.a,{to:window.location.pathname.slice(9,17)}):c.a.createElement("div",null,c.a.createElement(ue,{title:"Explorar Ingredientes"}),t&&"Loading...",a.length>0&&(E=a,c.a.createElement("div",{className:"container"},E.slice(0,12).map((function(e,t){return c.a.createElement("div",{class:"row justify-content-center m-3"},c.a.createElement("div",{class:"card text-center",style:{width:"18rem"}},c.a.createElement(o.b,{to:window.location.pathname.slice(9,17),onClick:function(t){return function(e,t){e.preventDefault(),u({type:"FETCH_BY_INGREDIENT"}),u(A({searchOption:"ingredient",searchedValue:t}))}(t,e["str".concat(p)])}},c.a.createElement("div",{"data-testid":"".concat(t,"-ingredient-card")},c.a.createElement("img",{"data-testid":"".concat(t,"-card-img"),src:"https://www.".concat(m,"db.com/images/ingredients/").concat(e["str".concat(p)],"-Small.png"),alt:"Ingredient Card"}),c.a.createElement("p",{"data-testid":"".concat(t,"-card-name")},e["str".concat(p)])))))})))),c.a.createElement(V,null))}));function ge(){return function(e){return e({type:"REQUEST_AREA_API"}),_("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((function(t){return e(function(e){return{type:"RECEIVE_AREA_API_SUCCESS",payload:e}}(t))}),(function(t){return e(function(e){return{type:"RECEIVE_AREA_API_FAILURE",payload:e}}(t.message))}))}}var Ie=Object(l.b)((function(e){return{isFetching:e.ThemealDB.isFetching,recipes:e.ThemealDB.recipes,isFetchingArea:e.AreaReducer.isFetchingArea,areas:e.AreaReducer.areas}}),null)((function(e){var t=e.isFetching,a=e.recipes,r=e.isFetchingArea,i=e.areas,o=Object(l.c)();Object(n.useEffect)((function(){o(d(window.location.pathname.slice(9,17))),o(A({searchedValue:""})),o(ge())}),[]);var s;return c.a.createElement("div",null,c.a.createElement(f,{title:"Explorar Origem"}),t&&"Loading...",!r&&i.length>0&&(s=i,c.a.createElement("div",null,c.a.createElement("select",{"data-testid":"explore-by-area-dropdown",onChange:function(e){return t=e.target.value,o(A("All"===t?{searchedValue:""}:{searchOption:"area",searchedValue:t}));var t}},c.a.createElement("option",{"data-testid":"All-option",defaultValue:!0},"All"),s.map((function(e){return c.a.createElement("option",{"data-testid":"".concat(e.strArea,"-option"),key:e.strArea,value:e.strArea},e.strArea)}))))),!t&&null!==a&&c.a.createElement(C,null),c.a.createElement(V,null))})),Oe=(a(56),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){null!=JSON.parse(localStorage.getItem("user"))&&r(JSON.parse(localStorage.getItem("user")).email)}),[]),c.a.createElement("div",null,c.a.createElement("header",{className:"header-profile"},c.a.createElement("img",{src:p.a,alt:"Profile Icon","data-testid":"profile-top-btn"}),c.a.createElement("h3",{"data-testid":"page-title"},"Perfil")),c.a.createElement("p",{"data-testid":"profile-email"},a),c.a.createElement(o.b,{to:"/receitas-feitas"},c.a.createElement("button",{type:"button","data-testid":"profile-done-btn"},"Receitas Feitas")),c.a.createElement(o.b,{to:"/receitas-favoritas"},c.a.createElement("button",{type:"button","data-testid":"profile-favorite-btn"},"Receitas Favoritas")),c.a.createElement(o.b,{to:"/"},c.a.createElement("button",{type:"button","data-testid":"profile-logout-btn",onClick:function(){return localStorage.clear()}},"Sair")),c.a.createElement(V,null))}),ve=function(){return c.a.createElement("h1",null,"Not Found")};var Re=function(){return c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:E}),c.a.createElement(s.b,{exact:!0,path:"/comidas",component:U}),c.a.createElement(s.b,{exact:!0,path:"/bebidas",component:P}),c.a.createElement(s.b,{exact:!0,path:"/comidas/:id",component:le}),c.a.createElement(s.b,{exact:!0,path:"/bebidas/:id",component:le}),c.a.createElement(s.b,{exact:!0,path:"/comidas/:id/in-progress",component:se}),c.a.createElement(s.b,{exact:!0,path:"/bebidas/:id/in-progress",component:se}),c.a.createElement(s.b,{exact:!0,path:"/receitas-feitas",component:de}),c.a.createElement(s.b,{exact:!0,path:"/receitas-favoritas",component:Ee}),c.a.createElement(s.b,{exact:!0,path:"/explorar",component:me}),c.a.createElement(s.b,{exact:!0,path:"/explorar/comidas",component:be}),c.a.createElement(s.b,{exact:!0,path:"/explorar/bebidas",component:be}),c.a.createElement(s.b,{exact:!0,path:"/explorar/comidas/ingredientes",component:fe}),c.a.createElement(s.b,{exact:!0,path:"/explorar/bebidas/ingredientes",component:fe}),c.a.createElement(s.b,{exact:!0,path:"/explorar/comidas/area",component:Ie}),c.a.createElement(s.b,{exact:!0,path:"/perfil",component:Oe}),c.a.createElement(s.b,{path:"*",component:ve}))},_e=(a(57),a(58),a(11)),je=a(36),Ae=a(37),ye={isFetching:!1,recipes:[],error:"",isFetchByIngredient:!1},Se={isVisible:!1,searchResultMoreOne:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_VISIBILITY":return Object(I.a)(Object(I.a)({},e),{},{isVisible:!e.isVisible});case"SEARCH_RESULT_MORE_ONE":return Object(I.a)(Object(I.a)({},e),{},{searchResultMoreOne:!e.searchResultMoreOne});default:return e}},Te={email:""},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_EMAIL":return Object(I.a)(Object(I.a)({},e),{},{email:t.payload});default:return e}},Fe={currentLocation:""},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOCATION":return Object(I.a)(Object(I.a)({},e),{},{currentLocation:t.payload});default:return e}},Le={isFetchingCategories:!1,categories:[],errorAPICategories:""},De={startRecipe:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_BTN_START":return Object(I.a)(Object(I.a)({},e),{},{startRecipe:!e.startRecipe});default:return e}},Ve={isFetchingIdDetail:!1,id:[],recomendation:[],error_id:"",error_recomendation:"",error_random:"",isFetchingRandom:!1},xe={favoriteListFetching:!0},Ue={isFetchingIngredients:!1,ingredients:[],errorAPIIngredients:""},Pe={isFetchingArea:!1,areas:[],errorAPIAreas:""},Be=Object(_e.combineReducers)({searchBar:Ce,saveEmail:Ne,ThemealDB:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action",a,n),a){case"REQUEST_RESET_FETCH_STATE":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1});case"REQUEST_RESET_RECIPES_STATE":return Object(I.a)(Object(I.a)({},e),{},{recipes:[]});case"REQUEST_THEMEALAPI":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!0});case"RECEIVE_THEMEALAPI_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1,recipes:n[Object.keys(n)]});case"RECEIVE_THEMEALAPI_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1,error:n});case"FETCH_BY_INGREDIENT":return Object(I.a)(Object(I.a)({},e),{},{isFetchByIngredient:!0});case"CHANGE_FETCH_BY_INGREDIENT":return Object(I.a)(Object(I.a)({},e),{},{isFetchByIngredient:!1});default:return e}},updateLocation:we,CategoriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action",a,n),a){case"REQUEST_RESET_FETCH_CATEGORIES_STATE":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1});case"REQUEST_RESET_CATEGORIES_STATE":return Object(I.a)(Object(I.a)({},e),{},{categories:[]});case"REQUEST_CATEGORIESAPI":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!0});case"RECEIVE_CATEGORIESAPI_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1,categories:n[Object.keys(n)]});case"RECEIVE_CATEGORIESAPI_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetching:!1,error:n});default:return e}},startRecipe:ke,DetailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action",a,n),a){case"REQUEST_DETAIL_ID_API":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIdDetail:!0});case"REQUEST_DETAIL_RECOMAND_API":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRecomandDetail:!0});case"RECEIVE_DETAIL_RECOMAND_API_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRecomandDetail:!1,recomendation:n[Object.keys(n)]});case"RECEIVE_DETAIL_RECOMAND_API_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRecomandDetail:!1,error_recomendation:n});case"RECEIVE_DETAIL_ID_API_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIdDetail:!1,id:n[Object.keys(n)]});case"RECEIVE_DETAIL_ID_API_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIdDetail:!1,error_id:n});case"REQUEST_RANDOM_API":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRandom:!0});case"RECEIVE_RANDOM_API_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRandom:!1,id:n[Object.keys(n)]});case"RECEIVE_RANDOM_API_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingRandom:!1,error_random:n});default:return e}},FavoritesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action Favorites Reducer",a,n),a){case"REQUEST_FAVORITE_FETCHING":return Object(I.a)(Object(I.a)({},e),{},{favoriteListFetching:!e.favoriteListFetching});case"RECEIVE_FAVORITE_FETCHING_SUCCESS":return Object(I.a)({},e);default:return e}},IngredientsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action",a,n),a){case"REQUEST_RESET_FETCH_INGREDIENTS_STATE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIngredients:!1});case"REQUEST_RESET_INGREDIENTS_STATE":return Object(I.a)(Object(I.a)({},e),{},{ingredients:[]});case"REQUEST_INGREDIENTS_API":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIngredients:!0});case"RECEIVE_INGREDIENTS_API_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIngredients:!1,ingredients:n[Object.keys(n)]});case"RECEIVE_INGREDIENTS_API_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingIngredients:!1,error:n});default:return e}},AreaReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(console.log("Action",a,n),a){case"REQUEST_RESET_FETCH_AREA_STATE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingArea:!1});case"REQUEST_RESET_AREA_STATE":return Object(I.a)(Object(I.a)({},e),{},{areas:[]});case"REQUEST_AREA_API":return Object(I.a)(Object(I.a)({},e),{},{isFetchingArea:!0});case"RECEIVE_AREA_API_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{isFetchingArea:!1,areas:n[Object.keys(n)]});case"RECEIVE_AREA_API_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{isFetchingArea:!1,error:n});default:return e}}}),Me=Object(_e.createStore)(Be,Object(je.composeWithDevTools)(Object(_e.applyMiddleware)(Ae.a)));i.a.render(c.a.createElement(o.a,{basename:"/recipe"},c.a.createElement(l.a,{store:Me},c.a.createElement(Re,null))),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.10327544.chunk.js.map