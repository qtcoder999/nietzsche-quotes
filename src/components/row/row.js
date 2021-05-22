import copy from 'copy-to-clipboard';
import { currentData, currentPhilosopher } from "../../utils/staticDataUtils";

export const Row = ({ parent: { props: { itemData: { searchText, philosopherFullName } } }, index, style }) => {
    return (
        currentData[index] !== undefined ?

            (<div key={currentData[index]['id']} className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>

                {`${currentData[index]['id']}. ${currentData[index]['quote']}`}

                <button onClick={() => {

                    copy(`"${currentData[index]['quote']}"\n\n― ${philosopherFullName}`);

                    if (searchText === "")
                        localStorage.setItem(currentPhilosopher + "-scrollPosition", currentData[index]['id'])

                    // alert.show('Copied!', 1000);

                }}>

                    Copy!{process.env.NODE_ENV !== "production" ? <>!</> : null}</button>

            </div >)

            : null
    )
};
