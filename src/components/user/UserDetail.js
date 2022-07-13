import react, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserById } from "./UserManager";
import "./UserDetail.css"

export const UserDetail = () => {
    const history = useHistory();
    const loggedInUserId = parseInt(localStorage.getItem("userId"));
    const {userId} = useParams();
    const [user, setUser] = useState([]);

    const loadUser = () => {
        getUserById(userId)
            .then(data =>
                setUser(
                {
                    id: parseInt(data.id),
                    firstName: data.user?.first_name,
                    lastName: data.user?.last_name,
                    username: data.user?.username,
                    bio: data.bio,
                    profileImage: data.profile_image_url,
                    createdOn: data.user?.date_joined
                }
                ))
    }

    useEffect(() => {
        setTimeout(() => loadUser(), 500)
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    // Changes date from yyyy-MM-dd to weekday, month date, year
    const changeDateFormat = (inputDate) => {
        let date = new Date(inputDate);
        
        return date.toLocaleString('en-US', {
            day: 'numeric', // numeric, 2-digit
            year: 'numeric', // numeric, 2-digit
            month: 'long', // numeric, 2-digit, long, short, narrow
        });
       
    }

    const formattedDate = changeDateFormat(user.createdOn)

    const handleSubmit = () => {
        evt.preventDefault()

        const newSub = {
            follower: userId,
            author: loggedInUserId,
            created_on: "2022-05-05",
            ended_on: ""
        }
        
        createSubscription(newSub)
        .then(() => history.push("/"))
    }
 

    if (user?.profileImage)
        return (
            <>
            <article className="userdetail">
                <h2>{user?.firstName} {user?.lastName}</h2>
                <div>
                    <div className="user__layout">
                        <div className="user__layout__left">
                            <img src={user?.profileImage} alt="a picture of this user" className="profile__picture"/>
                        </div>
                        <div className="user__layout__right">
                            <p><span className="userdetail__category">Username:</span> {user?.username}</p>
                            <p><span className="userdetail__category">Joined:</span> {formattedDate}</p>
                            <p><span className="userdetail__category">About {user?.firstName}:</span> {user?.bio}</p>
                        </div>
                    </div>
                <div>
                    
                </div>
                </div>

            </article>
            </>
        )
        else
        return (
        <>
        <article className="userdetail">
            <h2>{user?.firstName} {user?.lastName}</h2>
            <div>
                <div className="user__layout">
                    <div className="user__layout__right">
                        <p><span className="userdetail__category">Username:</span> {user?.username}</p>
                        <p><span className="userdetail__category">Joined:</span> {formattedDate}</p>
                        <p><span className="userdetail__category">About {user?.firstName}:</span> {user?.bio}</p>
                        <div className="user__layout__buttons">
                            <button
                                className="user__layout__button"
                                onClick={handleSubmit}
                                >
                            Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </article>
        </>
    )
    
}