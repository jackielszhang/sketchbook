import './utilities_expander.css';

export default function CSSUtilitiesExpander() {
    return (
        <div className="expander-wrapper ">
            <input type="checkbox" id="expander-toggle" className="expander-checkbox" />
            <label htmlFor="expander-toggle" className="expander-container">
                <div className="circle circle-main" />
                <div className="circle circle-expanded" />
                <div className="circle circle-expanded" />
                <div className="circle circle-expanded" />
            </label>
        </div>
    );
}