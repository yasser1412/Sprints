const mainAside = document.getElementById("mainAside")

const asideObj = {
    menuState : true,
    navHead : {
        appLogo: 'iM0-logo',
        appName: 'Reminders'
    },
    navItems : [
        { icon: 'iM0-paryer', title: 'Prayer', route: '#prayer', active: true},
        { icon: 'iM0-dashboard', title: 'Dashboard', route: '#dashboard', active: false},
        { icon: 'iM0-tasks', title: 'Tasks', route: '#tasks', active: false},
        { icon: 'iM0-reminders', title: 'Reminders', route: '#reminders', active: false},
        { icon: 'iM0-mypocket', title: 'My Pocket', route: '#pocket', active: false},
        { icon: 'iM0-categories', title: 'Categories', route: '#categories', active: false},
        { icon: 'iM0-archive', title: 'Archive', route: "#archive", active: false},
        { icon: 'iM0-trash', title: 'Trash', route: "#trash", active: false}
    ]
}

let lastActivated = 0;
function toggelActive(index){
    asideObj.navItems[lastActivated].active = false
    lastActivated = index;
    asideObj.navItems[index].active = true
    createHTML() 
}

function router(index){
    let route = asideObj.navItems[index].route
    window.location.hash = route
}

function openClosemenu(e){
    switch (asideObj.menuState){
        case true: 
            mainAside.style.width = '80px'
            asideObj.menuState = false
            createHTML()
            break;
        case false: 
            mainAside.style.width = '462px'
            asideObj.menuState = true
            setTimeout(function(){
                createHTML()
            },400)
            break;
    }
}

function createHTML() {
    addedHTML = `
                    <section class="fM0-size-a fM0-weight-a overflow-hidden">
                        <header class = "M0-aside-header cM0-bg-white d-flex align-items-center mb-4">
                            <i onclick = ${asideObj.menuState ? false : 'openClosemenu(event)'} class="${asideObj.navHead.appLogo} ${asideObj.menuState ? false : 'uM0-click'} iM0-size-a  uM0-image-contain mx-4">
                            </i>
                            <i onclick='openClosemenu(event)' class='uM0-click uM0-image-contain ml-auto iM0-size-a iM0-menu  ${asideObj.menuState ? "d-inline-block": 'd-none'} mx-4'>            
                            </i>
                        </header>
                        <ul class='p-0'>
                `
    for ( let [index, item] of asideObj.navItems.entries()) {
        addedHTML += `
                            <li onclick='toggelActive(${index}); router(${index})' class='${item.active ? 'cM0-bg-main' : false} uM0-click M0-aside-items cM0-white d-flex align-items-center'>
                            <i class='${item.icon} iM0-size-a d-inline-block uM0-image-contain mx-4'></i>
                                ${asideObj.menuState ? item.title : ''}
                            </li>
                    `
        addedHTML += `
                        </ul>
                        <div></div>
                    </section>
                    `
    }
    mainAside.innerHTML = addedHTML
}

createHTML()