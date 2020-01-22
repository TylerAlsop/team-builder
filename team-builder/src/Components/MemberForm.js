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
            email: "",
            role: ""
        })
    }
    console.log("memberInfo state", memberInfo);

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Member's Name"
                onChange={handleChanges}
                value={memberInfo.name}
            />

            <label htmlFor="email">E-mail</label>
            <input
                id="email"
                type="text"
                name="email"
                placeholder="Member's E-mail Address"
                onChange={handleChanges}
                value={memberInfo.email}
            />

            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                placeholder="Member's Role"
                onChange={handleChanges}
                value={memberInfo.role}
            />

            <button type="submit">Submit Member Info</button>
        </form>
        
    )
};

export default MemberForm;