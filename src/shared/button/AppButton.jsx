import './AppButton.css'
import { Button } from "primereact/button";

// eslint-disable-next-line react/prop-types
export default function AppButton({ label = '', icon, extraStyleClass = '', handleClick, withoutClickHandler }) {

    const withoutFunctionality = <div className={ `button ${ extraStyleClass }` }>
        { label && label }
        { icon && <i className={ icon }></i> }
    </div>

    const withFunctionality = <Button className={ `button ${ extraStyleClass }` } unstyled onClick={ handleClick }>
        { label && label }
        { icon && <i className={ icon }></i> }
    </Button>

    return ( withoutClickHandler ? withoutFunctionality : withFunctionality )
}
