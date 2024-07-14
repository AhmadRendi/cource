


function isActive({page}) {
    const [activePage, setActivePage] = useState('home');

    const changeActivePage = (page) => {
        setActivePage(page);
    }

    return {
        activePage,
        changeActivePage
    }
}