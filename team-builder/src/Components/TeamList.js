import React from 'react';

const TeamList = props => {
    return (
        <div className="team-list">
            {props.forms.map(memberInfo => (
                <div>
                    <h2>{memberInfo.name}</h2>
                    <h3>{memberInfo.email}</h3>
                    <h3>{memberInfo.role}</h3>
                </div>
            ))}
        </div>
    )
}