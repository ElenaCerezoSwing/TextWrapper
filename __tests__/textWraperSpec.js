//Text Wrapper
// A function that receives any text and a given
// width and returns the same text with \n

//TODO list
//textWrapper("hello", 7)=>"hello"
//textWrapper("hello", 1)=>"h\nello"
//textWrapper("hello world", 7)=>"hello\nworld"
//textWrapper("hello world mates", 7)=>"hello\nworld\nmates"

function textWrapper(text, maxWidth) {
    if (text.length <= maxWidth) {
        return text;
    } else {
        if (text.includes(" ")) {
            text = text.replace(" ", "\n");
            text = text.replace(" ", "\n");
            console.log(text);
            return text;
        }
        text = text.split("");
        var splicedText = text.splice(maxWidth, 0, "\n");
        var joinedText = text.join("");
        return joinedText;
    }
}


describe("", function () {
    beforeEach(function (done) {
        done();
    });
    it("", function () {
        expect(1).toBe(1);
    });
    it("should return the same text if it fits", () => {
        expect(textWrapper("hello", 7)).toBe('hello');
    });
    it("should break in lines if text does not fix", () => {
        expect(textWrapper("hello", 2)).toBe('he\nllo');
    });
    it("should break in lines if text does not fix", () => {
        expect(textWrapper("hello world", 7)).toBe('hello\nworld');
    });
    it("should break in lines if text contains gap", () => {
        expect(textWrapper("hello world mate", 7)).toBe('hello\nworld\nmate');
    });

});