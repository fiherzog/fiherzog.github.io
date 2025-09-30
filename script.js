const navTabs = document.querySelectorAll('.nav-tab');
const pages = document.querySelectorAll('.page');

function showPage(pageName) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(pageName).classList.add('active');
    
    const activeTab = document.querySelector(`[data-page="${pageName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

navTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // If the tab has an href attribute (like Resume), let it navigate normally
        if (tab.hasAttribute('href') && tab.getAttribute('href').startsWith('http')) {
            return; // Don't prevent default, let the link work
        }
        
        e.preventDefault();
        const pageName = tab.getAttribute('data-page');
        if (pageName) {
            showPage(pageName);
        }
    });
});