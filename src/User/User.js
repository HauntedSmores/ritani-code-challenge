import React from 'react'
import './User.css'

function User({ user, fetchFollowers, loading }) {

  return (
    <div className="User">
      <h4 className="username">{ user.login }</h4>
      <img className="avatar" src={user.avatar_url} alt=""/>
      <p>Followers: { user.followers_count }</p>
      <div class="followers">
        {user.followers.map(follower => (
          <div class="follower">
            <img src={follower.avatar_url} alt=""/>
            <p>{follower.login}</p>
          </div>
        ))}
      </div>
      <button onClick={() => fetchFollowers(user.login)} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  )
}

export default User;