import{_ as u}from"./DlAUqK2U.c.js";import{c as o,a as r,b as p,w as f,F as m,r as w,d as h,n as g,e as v,o as a,f as x,t as b}from"./iQYQ6evD.p.js";const y={data(){return{branch:window.localStorage.getItem("Branch")||!1,username:window.localStorage.getItem("Github username")||!1,path:window.localStorage.getItem("Path")||!1,repo:window.localStorage.getItem("Repo name")||!1,token:window.localStorage.getItem("Token")||!1,posts:[],filtered:[],url:"",selected:"",preview:!1}},mounted:async function(){this.loadList();const t=document.createElement("script");t.setAttribute("src","https://cdn.jsdelivr.net/npm/marked/marked.min.js"),document.head.appendChild(t),this.titleSize()},methods:{generateUrl(){return!this.branch||!this.username||!this.path||!this.repo||!this.token?!1:`https://api.github.com/repos/${this.username}/${this.repo}/contents/${this.path}?ref=${this.branch}`},filter({target:t}){this.filtered=this.posts.filter(e=>e.name.startsWith(t.value))},previewSwich(){this.preview=!this.preview},async edit(t){const e=this.posts.find(n=>n.name==t),c=e.type=="file"?e.download_url:`https://raw.githubusercontent.com/${this.username}/${this.repo}/main/${this.path}/${t}/index.md`;try{const n=await fetch(c);n.ok&&(this.$refs.editor.value=await n.text(),this.selected=e,this.renderFile(),this.titleSize())}catch(n){console.log("File does not exist, creating new one",n)}},async loadList(){if(this.url=this.generateUrl())try{const t=await fetch(this.url,{headers:{Authorization:`token ${this.token}`}});t.ok&&(this.posts=await t.json(),this.filtered=this.posts)}catch(t){console.log("File does not exist, creating new one",t)}},titleSize(){this.$refs["file-title"].size=this.$refs["file-title"].value.length},getTextWidth(t,e){const n=document.createElement("canvas").getContext("2d");return n.font=e,n.measureText(t).width},renderFile(){this.$refs.preview.innerHTML=window.marked.parse(this.$refs.editor.value)},clearSelected(){this.$refs.editor.value="",this.selected="",this.titleSize()},async putFile(){try{(await fetch(`https://api.github.com/repos/${this.username}/${this.repo}/contents/${this.$refs["file-title"].value}`,{method:"PUT",headers:{Authorization:`token ${this.token}`,"Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},body:JSON.stringify({message:`Adding/Updating file ${this.$refs["file-title"].value}`,content:btoa(this.$refs.editor.value),sha:this.selected.sha||null,branch:this.branch,owner:this.username,repo:this.repo,path:this.$refs["file-title"].value,committer:{name:this.username,email:this.username+"@github.com"}})})).ok&&console.log("saved successfully")}catch(t){console.log("File does not exist, creating new one",t)}},async delFile(){try{(await fetch(`https://api.github.com/repos/${this.username}/${this.repo}/contents/${this.$refs["file-title"].value}`,{method:"DELETE",headers:{Authorization:`token ${this.token}`,"Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},body:JSON.stringify({message:`Deleting file ${this.$refs["file-title"].value}`,content:btoa(this.$refs.editor.value),sha:this.selected.sha||null,branch:this.branch,owner:this.username,repo:this.repo,path:this.$refs["file-title"].value,committer:{name:this.username,email:this.username+"@github.com"}})})).ok&&console.log("delete successfully")}catch(t){console.log("File does not exist, creating new one",t)}}}},k={class:"flex flex-row w-screen h-screen"},z={class:"flex flex-col py-2 bg-zinc-900 w-52"},S={class:"flex flex-col justify-center w-full p-2"},_=["onClick"],F={key:1},$={class:"w-full h-full bg-zinc-700 flex flex-col"},C={class:"text-zinc-200 flex flex-row justify-between w-full"},T={class:"bg-zinc-800 w-max px-4 py-1 flex flex-row"},I=["value"];function j(t,e,c,n,l,i){const d=v("RouterLink");return a(),o("main",k,[r("div",z,[r("div",S,[p(d,{to:"/settings",class:"cursor-pointer text-center text-base bg-zinc-600 hover:bg-zinc-500 text-white rounded p-2 block w-full"},{default:f(()=>[x("Settings")]),_:1}),r("input",{onInput:e[0]||(e[0]=(...s)=>i.filter&&i.filter(...s)),class:"mt-2 bg-zinc-600 text-white rounded px-2 py-1 text-md",placeholder:"Filter",type:"text"},null,32)]),this.url?(a(!0),o(m,{key:0},w(l.filtered,s=>(a(),o("div",{onClick:A=>i.edit(s.name),class:"text-blue-100 px-3 cursor-pointer text-sm hover:bg-red-400"},b(s.name.replace(".md","")),9,_))),256)):(a(),o("div",F,"Please setup env in settings"))]),r("div",$,[r("div",C,[r("div",T,[r("div",{onClick:e[1]||(e[1]=(...s)=>i.putFile&&i.putFile(...s)),class:"mr-2 cursor-pointer bg-zinc-900 rounded"},"💾"),l.selected.path?(a(),o("div",{key:0,class:"mr-2 cursor-pointer bg-zinc-900 rounded",onClick:e[2]||(e[2]=(...s)=>i.delFile&&i.delFile(...s))},"🗑️")):h("",!0),r("input",{ref:"file-title",onInput:e[3]||(e[3]=(...s)=>i.titleSize&&i.titleSize(...s)),class:"bg-transparent",value:l.selected?l.selected.type=="file"?l.selected.path:l.selected.path+"/index.md":this.path+"/new_file.md"},null,40,I),l.selected.path?(a(),o("div",{key:1,class:"ml-2 cursor-pointer bg-zinc-900 rounded",onClick:e[4]||(e[4]=(...s)=>i.clearSelected&&i.clearSelected(...s))},"❌")):h("",!0)]),r("div",{class:"cursor-pointer w-max py-1 px-4 hover:text-zinc-400",onClick:e[5]||(e[5]=(...s)=>i.previewSwich&&i.previewSwich(...s))},"preview")]),r("textarea",{onInput:e[6]||(e[6]=(...s)=>i.renderFile&&i.renderFile(...s)),ref:"editor",class:"bg-zinc-800 w-full h-full p-2 text-blue-100"},null,544)]),r("div",{class:g(`w-full h-full bg-zinc-900 text-zinc-200 overflow-y-auto p-2 ${this.preview?"":"hidden"}`),ref:"preview"},null,2)])}const N=u(y,[["render",j]]);export{N as default};
