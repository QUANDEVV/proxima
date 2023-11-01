exports.id=696,exports.ids=[696],exports.modules={7696:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_app});var l=s(997),a=s(4298),i=s.n(a),r=s(1162),A=s(6689),n=s(1163),c=s(5675),d=s.n(c),o=s(1664),x=s.n(o);let h={cross:{src:"/_next/static/media/cross.4cd9f151.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX///////////////9MaXH+/v4apW2BAAAABnRSTlNK9VQDAOCmkjViAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALklEQVR4nEXLMQoAMAzDQNlR/v/l0qF0Exxi64xdGpQUG0hlJMH5IZeQptqUtx8UZACRdNNoJwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},logo02:{src:"/_next/static/media/logo02.a2196d4e.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEXtFIbSGrrUG7vcF6DuE4TSGbvTGK7vFInTGavmFIb6FI2aF2eUGHDoFpmtF3zqF6jnG76GF1fYGr63FWv1FZylGox+GWayFnOx5ip3AAAACnRSTlPFwvv+JyfH/f7+ArNcVQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAD5JREFUeJxFyUkSgCAMBMBBliyQAAr6/59601tXNRKILJYMqDweRwDJrO3mA3rV1ds+f3wFFXceAQlmnUt+AV5GAq5NQKh6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},menu:{src:"/_next/static/media/menu.1460ad14.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEX///////////9MaXH///////////+tVghgAAAAB3RSTlMPmmQAXWZihxwPrwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACZJREFUeJxjYIABRihgYIYCBhZWJiYmJlYWBhYQzcTEgpCCK4YBAA/bAG+LT6/gAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},MenuItems=({isMobile:e,active:t,setActive:s,setIsOpen:a})=>{let generateLink=e=>{switch(e){case 0:case 2:default:return"/";case 1:return"/profile"}};return l.jsx("ul",{className:`list-none flexCenter flex-row ${e&&"flex-col h-full"}`,children:["Home","My Profile"].map((i,r)=>l.jsx("li",{onClick:()=>{s(i),e&&a(!1)},className:`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
          ${t===i?"dark:text-white text-nft-black-1":"dark:text-nft-gray-3 text-nft-gray-2"} 
          ${e&&"my-5 text-xl"}`,children:l.jsx(x(),{href:generateLink(r),children:i})},r))})},ButtonGroup=({setActive:e,router:t})=>l.jsx("div",{className:"flexCenter"}),checkActive=(e,t,s)=>{switch(s.pathname){case"/":"Top Models"!==e&&t("Top Models");break;case"/profile":"Listed NFTs"!==e&&t("Listed NFTs");break;case"/my-nfts":"My NFTs"!==e&&t("My NFTs");break;case"/create-nft":""!==e&&t("");break;default:t("")}},components_Navbar=()=>{let{theme:e,setTheme:t}=(0,r.useTheme)(),[s,a]=(0,A.useState)("Top Models"),[i,c]=(0,A.useState)(!1),o=(0,n.useRouter)();return(0,A.useEffect)(()=>{t("dark")},[]),(0,A.useEffect)(()=>{checkActive(s,a,o)},[o.pathname]),(0,A.useEffect)(()=>{i?document.body.style.overflow="hidden":document.body.style.overflow="visible"},[i]),(0,l.jsxs)("nav",{className:"flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1",children:[(0,l.jsxs)("div",{className:"flex flex-1 flex-row justify-start",children:[l.jsx(x(),{href:"/",children:(0,l.jsxs)("div",{className:"flexCenter md:hidden cursor-pointer",onClick:()=>a("Explore NFTs"),children:[l.jsx(d(),{src:h.logo02,style:{objectFit:"contain",width:"32px",height:"32px"},alt:"logo"}),l.jsx("p",{className:" dark:text-white text-nft-black-1 font-semibold text-lg ml-1",children:"Proxima"})]})}),l.jsx(x(),{href:"/",children:(0,l.jsxs)("div",{className:"hidden md:flex",onClick:()=>{a("Explore NFTs"),c(!1)},children:[l.jsx(d(),{src:h.logo02,style:{objectFit:"contain",width:"32px",height:"32px"},alt:"logo"}),l.jsx("p",{className:" dark:text-white text-nft-black-1 font-semibold text-lg ml-1",children:"Proxima "})]})})]}),(0,l.jsxs)("div",{className:"flex flex-initial flex-row justify-end",children:[(0,l.jsxs)("div",{className:"flex items-center mr-2",children:[l.jsx("input",{type:"checkbox",className:"checkbox",id:"checkbox",onChange:()=>t("light"===e?"dark":"light")}),(0,l.jsxs)("label",{htmlFor:"checkbox",className:"flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label",children:[l.jsx("i",{className:"fas fa-sun"}),l.jsx("i",{className:"fas fa-moon"}),l.jsx("div",{className:"w-3 h-3 absolute bg-white rounded-full ball"})]})]}),(0,l.jsxs)("div",{className:"md:hidden flex",children:[l.jsx("ul",{className:"list-none flexCenter flex-row",children:l.jsx(MenuItems,{active:s,setActive:a})}),l.jsx("div",{className:"ml-4"})]})]}),(0,l.jsxs)("div",{className:"hidden md:flex ml-2",children:[i?l.jsx(d(),{src:h.cross,objectFit:"contain",width:20,height:20,alt:"close",onClick:()=>c(!i),className:"light"===e?"filter invert":void 0}):l.jsx(d(),{src:h.menu,style:{objectFit:"contain",width:"25px",height:"25px"},alt:"menu",onClick:()=>c(!i),className:"light"===e?"filter invert":void 0}),i&&(0,l.jsxs)("div",{className:"fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col",children:[l.jsx("div",{className:"flex-1 p-4",children:l.jsx(MenuItems,{active:s,setActive:a,isMobile:!0,setIsOpen:c})}),l.jsx("div",{className:"p-4 border-t dark:border-nft-black-1 border-nft-gray-1",children:l.jsx(ButtonGroup,{setActive:a,router:o})})]})]})]})};s(6764);let _app=({Component:e,pageProps:t})=>(0,l.jsxs)(r.ThemeProvider,{attribute:"class",children:[(0,l.jsxs)("div",{className:"dark:bg-nft-dark bg-white min-h-screen",children:[l.jsx(components_Navbar,{}),l.jsx("div",{className:"pt-65",children:l.jsx(e,{...t})})]}),l.jsx(i(),{src:"https://kit.fontawesome.com/d45b25ceeb.js",crossorigin:"anonymous"})]})},6764:()=>{}};