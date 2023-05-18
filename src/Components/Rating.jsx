import React from 'react';

const Rating = ({ children }) => {
    const userRating = Math.round(children)
    console.log(userRating);
    return (
        <div>
            {userRating === 5 ? <>⭐⭐⭐⭐⭐</>
                : userRating === 4 ? <>⭐⭐⭐⭐</>
                    : userRating === 3 ? <>⭐⭐⭐</>
                        : userRating === 4 ? <>⭐⭐</>
                            : userRating === 1 ? <>⭐</> : ""
            }
        </div>
    );
};

export default Rating;