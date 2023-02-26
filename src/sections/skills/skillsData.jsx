const techData = [
    {
        id:1,
        arduino: "https://img.icons8.com/fluency/256/arduino.png",
        git: "https://img.icons8.com/color/256/git.png" ,
        solidworks: "https://img.icons8.com/color/256/solidworks.png",
        matlab: "https://img.icons8.com/fluency/256/matlab.png",
        // simulink: <AiFillGithub/>,
        autoCad: "https://img.icons8.com/fluency/256/autocad.png",
        autodesk: "https://img.icons8.com/fluency/256/autodesk--v2.png",
        ansys: "https://img.icons8.com/windows/256/Ansys.png",
        catia: "https://logodix.com/logo/1810219.png",
        cli: "https://img.icons8.com/ios-filled/256/command-line.png",
        sap: "https://img.icons8.com/color/256/sap.png",
        zoho:"https://www.zoho.com/branding/images/zoho-logo.png",
        ms365:"https://img.icons8.com/color/256/office-365.png",
        // gSuite: <AiFillGithub/>,
        illustrator: "https://img.icons8.com/color/256/adobe-illustrator.png",
        

    },
]

const langData = [
    {
        id:1,
        html: "https://img.icons8.com/officel/256/html-filetype.png",
        js: "https://img.icons8.com/color/256/javascript.png",
        css:  "https://img.icons8.com/color/256/css3.png",
        react:  "https://img.icons8.com/officel/256/react.png",
        c:  "https://img.icons8.com/color/256/c-programming.png",
        vhdl: "https://global-uploads.webflow.com/6047a9e35e5dc54ac86ddd90/638a61921edcd6b61220a23a_XrbJ07KiqWOBrxBtkJGoAUdyjwynYp-eC0MPmL1RoQU.png",
        assembly:"https://static.thenounproject.com/png/3180484-200.png",
        appScript: "data:image/png;base64,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",
    },
]

export{
    langData,
    techData
}
