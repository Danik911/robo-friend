import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        robots.map(
            (usersRobots, i) => {
                return (
                    <Card
                        key={usersRobots.id}
                        id={robots[i].id}
                        userName={robots[i].name}
                        mail={robots[i].email}
                    />

                )

            }
        )
    )
}

export default CardList