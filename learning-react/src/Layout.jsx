import Header from "./Header";


const Layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
                <div className="row-span-2 p-12 bg-amber-400  text-center">1</div>
                <div className="col-span-2 p-12 bg-red-400  text-center">2</div>
                <div className="col-span-2 p-12 bg-green-400  text-center">3</div>
            </div>

            {/* <ul className="flex gap-12">
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul> */}
        </div>
    );
};

export default Layout;