import {ReactComponent as StarFull} from "assets/img/star_full.svg";
import {ReactComponent as StarHalf} from "assets/img/star_half.svg";
import {ReactComponent as StarEmpty} from "assets/img/star_empty.svg";
import "./style.css"

type Props = {
    score: number
}

type StarProps = {
    fill: number
}

function MovieStar({score}: Props) {
    const fills = getFills(score);
    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]}/>
            <Star fill={fills[1]}/>
            <Star fill={fills[2]}/>
            <Star fill={fills[3]}/>
            <Star fill={fills[4]}/>
        </div>
    );
}

export default MovieStar;


// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star({fill}: StarProps) {
    if (fill === 1)
        return (<StarFull/>);
    else if (fill === 0.5)
        return (<StarHalf/>);
    else
        return (<StarEmpty/>);
}