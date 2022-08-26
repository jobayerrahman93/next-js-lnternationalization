
import Header from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            {children}

        </>
    );
};

export default Layout;