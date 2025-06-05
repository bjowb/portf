import { defineStore } from "pinia";



import type { IApp } from "../assets/ts/app";
import { initRecycleBin } from "../assets/ts/app";


import NotepadIcon from '../assets/notepad.png'
import TrashIcon from '../assets/trash.png'
import aboutMeIcon from '../assets/aboutme.png'
import textFileIcon from '../assets/text_file.png'
import cmdIcon from '../assets/cmd.png'


import Notepad from "../components/apps/notepad.vue";
import Recyclebin from "../components/apps/recyclebin.vue";
import Textfile from "../components/apps/textfile.vue";
import Aboutme from "../components/apps/aboutme.vue";
import Cmd from "../components/apps/cmd.vue";

interface IStateApp{
    apps : IApp[];
    index : number;
}

export const useAppStore = defineStore("appStore",{
    state : (): IStateApp =>({
        index:0,
        apps:[{
            appName : "recycle-bin", appIcon : TrashIcon,
            componentName : Recyclebin, openWindow : false, recycleBinContent : initRecycleBin(), inDesktop : true, isProgram: true
        },{
                appName: "about me", appIcon: aboutMeIcon,
                componentName: Aboutme, openWindow: false, inDesktop: true, isProgram: true
            }, {
                appName: "notepad", appIcon: NotepadIcon,
                componentName: Notepad, openWindow: false, inDesktop: true, isProgram: true
            }, {
                appName: "readme", appIcon: textFileIcon,
                componentName: Textfile, openWindow: false, 
                notepadContent: "technologies that I used: Typescript, Vue.js, Pinia, HTML, Canvas, SCSS", inDesktop: true, isProgram: false
            }, {
                appName: "cmd", appIcon: cmdIcon,
                componentName: Cmd, openWindow: false, inDesktop: false, isProgram: true
            },
            
        ]
    }), getters : {
        openedApps(): any{
            return this.apps.filter(app=> (app.openWindow === true && app.notepadContent === undefined));
        }, DesktopApps(): any {
            return this.apps.filter(app => (app.inDesktop === true));
        }, executables(): any {
            return this.apps.filter(app => (app.isProgram === true));
        }, textFiles(): any {
            return this.apps.filter(app => (app.isProgram !== true));
        }
    },
    actions :{
        pushTextFile(fileName:string, content:string,isInDesktop:boolean) : void{
            this.apps.push({
                appName: fileName,appIcon:textFileIcon,
                componentName: Notepad, openWindow: false, notepadContent: content, inDesktop: isInDesktop, isProgram: false,
            })
        }
    }
})

