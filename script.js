function search(query) {
    alert('You have searched for ' + query)
}

document.getElementById('searchTerm').addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        search(query.value)
    }
})