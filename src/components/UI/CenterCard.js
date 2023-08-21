import './CenterCard.css'

const CenterCard = (props) => {
    const classes = 'center-card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}
export default CenterCard;