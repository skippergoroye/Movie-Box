export const truncateOverview = (text: string) => {
    if(text.length > 200) {
        // return `text.slice(0, 200)${'....'}`;
        let newtext = text.slice(0, 200) + "....";
        return newtext
    } else {
        return text
    }
}


const originalText = "This is a long text that exceeds 200 characters...";
const truncatedText = truncateOverview(originalText);
console.log(truncatedText);

