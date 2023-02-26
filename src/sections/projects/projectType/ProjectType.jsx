import "./ProjectType.css";

function ProjectType(props){
    return(

        // Logic to make a div active onClick if the above statement is truethy
        <li className=
                {props.active ? "ProjectType active": "ProjectType"}       
                            
                onClick={()=> props.setSelected(props.option.type)}

        >
            {props.option.title}            
        </li>
    )
}

export{
    ProjectType
}