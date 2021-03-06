import React, {useState, useEffect} from "react";
import axiosRequest from "./services/axios-request";
import IUsers from "./types/users.type";
import handleResponse from "./utility/handleResponse";
import UserCard from "./componenets/UserCard";
import {DivWrapper} from "./style/Style";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const initialValues: IUsers = {
        gender: "",
        dob: {
            age: 0
        },
        name: {
            first: "",
            last: "",
        },
        location: {},
        email: "",
        picture: {
            large: ""
        },
        nat: ""
    };

    const [user, setUser] = useState<IUsers>(initialValues);

    const getUser = async () => {
        setIsLoading(true);
        await axiosRequest.getUser()
            .then((res: any) => {
                return handleResponse(res);
            }).then((res: any) => {
                setUser(res[0]);
                setIsLoading(false);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <DivWrapper className="App">
            <Header />
            <UserCard user={user} getUser={getUser} isLoading={isLoading} />
            <Footer getUser={getUser} />
        </DivWrapper>
    );
}

export default App;
