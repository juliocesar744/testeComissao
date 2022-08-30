function getMonth(dateString) {
    var parts = dateString.split('-');

    var mydate = new Date(parts[0], parts[1], parts[2]); 
    return mydate.getMonth();
}
export { getMonth }