import React, { useState } from 'react';

const MemberForm = ({ addMember }) => {

    const [memberInfo, setMemberInfo] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = event => {
        setMemberInfo({ ...memberInfo, [event.target.name]: event.target.value });
    }
    
    const submitForm = event => {
        event.preventDefault();
    
        addMember(memberInfo);
    
        setMemberInfo ({ 
            name: "",
            email: "";
            role: ""
        })
    }
    console.log("memberInfo state", memberInfo);

    return (
        
    )
}

