
if (!String.prototype.parse) {
    String.prototype.parse = function () {
        try {
            return JSON.parse(this);
        } catch (error) {
            throw (error);
        }
    }
}