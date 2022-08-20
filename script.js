function listen() {
    let el = document.getElementById('centerBanner')
    el.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            search(query.value)
        }
    })
}

function search(query) {
    alert('You have searched for ' + query);
}