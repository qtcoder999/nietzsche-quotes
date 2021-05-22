import { isEmpty } from "lodash";
import { CellMeasurerCache } from "react-virtualized";
import { OPTIONS } from "../../../constants/constants";
import { changeData, currentPhilosopher, dataCollection, setCurrentPhilosopher } from "../../../utils/staticDataUtils"

export const changeQuotesData = (name) => {
    let newName = name.toUpperCase().split(" ").join("_");

    setCurrentPhilosopher(newName)

    changeData(dataCollection[newName])
}

export const cache = new CellMeasurerCache({
    defaultHeight: 100,
    fixedWidth: true
});

export const getPhilosopherFullName = () => {
    const currentIndex = OPTIONS.filter(({ value }) => currentPhilosopher === value);
    if (!isEmpty(currentIndex))
        return currentIndex && currentIndex[0].fullName;
}