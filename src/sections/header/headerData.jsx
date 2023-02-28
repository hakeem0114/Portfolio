//Header Icons from React Icons instead of retrieving from local storage
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";


const headerData = [
    {
        id:1,
        link: "https://github.com/hakeem0114",
        icon: <AiFillGithub/>
    },
    {
        id:2,
        link: "https://linkedin.com/in/hakeemabdul-razak/",
        icon: <AiFillLinkedin/>
    },
    {
        id:3,
        link: "#contact",
        icon: <AiOutlineMail/>
    },
]

export default headerData;