import React, { useState } from 'react';
import Form from './Form/Form'
import User from './User/User'
import './App.css';
import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)
  const [page, setPage] = useState(1)

  async function fetchUser(username) {

    setLoading(true)

    try {

      const {data: user} = await octokit.users.getByUsername({username});
      const {data: followers} = await octokit.users.listFollowersForUser({username, per_page: 100});

      setUser({
        ...user,
        followers_count: user.followers,
        followers
      })

    } catch(err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

  }

  async function fetchFollowers(username) {

    setLoading(true)

    try {

      const options = {
        username,
        per_page: 100,
        page: page + 1
      }

      const {data} = await octokit.users.listFollowersForUser(options);

      setUser({
        ...user,
        followers: user.followers.concat(data)
      })

      setPage(page + 1)

    } catch(err) {
      console.error(err)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="App">
      <h4>User Search</h4>
      <Form
        setLoading={setLoading}
        setUser={setUser}
        fetchUser={fetchUser}
      />
      {loading && 'Loading...' }
      {user && (
        <User
          user={user}
          fetchFollowers={fetchFollowers}
          loading={loading}/>
      )}
    </div>
  );
}

export default App;
