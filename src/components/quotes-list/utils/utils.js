import { isEmpty } from "lodash";
import { OPTIONS } from "../../../constants/constants";
import { changeData, currentData, currentPhilosopher, dataCollection, setCurrentPhilosopher } from "../../../utils/staticDataUtils";

export const changeQuotesData = (name) => {

    const currentPhilosopherArray = OPTIONS.filter(({ value }) => {
        return (name === value)
    });

    setCurrentPhilosopher(currentPhilosopherArray[0].value)

    changeData(dataCollection[currentPhilosopherArray[0].value])

}

export const getPhilosopherFullName = () => {
    const currentIndex = OPTIONS.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullName;
}

export const changeQuotesByWordLength = (start, end) => {
    console.log(start, end)
    console.log(currentData.length)
    // if (start === 1 && typeof end === "string" && end.trim() === "") resetData()

    if (typeof start === "string" && start.trim() === "") start = 0;

    if (currentData) {
        const newData = currentData.filter(quote => {
            const wordCount = getWordCount(quote)

            if (end && end !== "") {

                if (wordCount >= start && wordCount <= end) {
                    return true;
                }

                else if (end === "") {

                    if (wordCount >= start) {
                        return true
                    }
                }

            }
            return false;
        });

        changeData(newData);

    }

}

export function getWordCount(str) {
    return str.split(' ')
        .filter(function (n) { return n !== '' })
        .length;
}