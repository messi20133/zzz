export default {
    indexOf: function(array, opt, val) {
        if (arguments.length != 3) {
            return -1;
        }
        var index = -1;
        array.forEach(function(item, itemIndex) {
            if (item[opt] == val) {
                index = itemIndex;
            }
        });
        return index;
    }
}