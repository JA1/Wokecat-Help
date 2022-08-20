function listen() {
    let el = document.getElementById('centerBanner')
    el.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            search(query.value)
            removeEventListener('keydown', (e) => {
                search(query.value)
                el.removeEventListener('keydown')
            })
        }
    })
}

function search(query) {
    alert('You have searched for ' + query);
}