import { version } from "react";

function Button(props) {
    const { children, variant, onClick } = props;

    return (
        <button className={`${variant} py-2 px-8 lg:py-2 lg:px-10 rounded-md font-bold`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function ButtonSearch(props) {
    const { children, variant, onClick } = props;

    return (
        <button className={`${variant} px-6 lg:px-10 rounded-md font-bold`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function ContainerButton( {onClick, variant, children, mt = "mt-10"} ) {
    return (
        <div className={`w-full flex justify-center justify-center ${mt}`}>
            <Button variant={variant} onClick={onClick}>
                {children}
            </Button>
        </div>
    );
}

function ContainerButtonSearch( {onClick, variant, children} ) {
    return (
        <div className="w-full flex justify-center justify-center">
            <ButtonSearch variant={variant} onClick={onClick}>
                {children}
            </ButtonSearch>
        </div>
    );
}

export { ContainerButton, ContainerButtonSearch };