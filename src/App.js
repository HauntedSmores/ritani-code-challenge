import React, { useState } from 'react';
import Form from './Form/Form'
import User from './User/User'
import './App.css';
import { Octokit } from "@octokit/rest";
const octokit = new Octokit();

const USER = {
  login: 'HauntedSmores',
  id: 20644458,
  node_id: 'MDQ6VXNlcjIwNjQ0NDU4',
  avatar_url: 'https://avatars3.githubusercontent.com/u/20644458?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/HauntedSmores',
  html_url: 'https://github.com/HauntedSmores',
  followers_url: 'https://api.github.com/users/HauntedSmores/followers',
  following_url: 'https://api.github.com/users/HauntedSmores/following{/other_user}',
  gists_url: 'https://api.github.com/users/HauntedSmores/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/HauntedSmores/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/HauntedSmores/subscriptions',
  organizations_url: 'https://api.github.com/users/HauntedSmores/orgs',
  repos_url: 'https://api.github.com/users/HauntedSmores/repos',
  events_url: 'https://api.github.com/users/HauntedSmores/events{/privacy}',
  received_events_url: 'https://api.github.com/users/HauntedSmores/received_events',
  type: 'User',
  site_admin: false,
  name: 'Darren Segal',
  company: '@Zenabidata ',
  blog: '',
  location: 'NYC',
  email: null,
  hireable: null,
  bio: null,
  public_repos: 15,
  public_gists: 5,
  followers: [
    {
      login: 'robskrob',
      id: 4349424,
      node_id: 'MDQ6VXNlcjQzNDk0MjQ=',
      avatar_url: 'https://avatars1.githubusercontent.com/u/4349424?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/robskrob',
      html_url: 'https://github.com/robskrob',
      followers_url: 'https://api.github.com/users/robskrob/followers',
      following_url: 'https://api.github.com/users/robskrob/following{/other_user}',
      gists_url: 'https://api.github.com/users/robskrob/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/robskrob/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/robskrob/subscriptions',
      organizations_url: 'https://api.github.com/users/robskrob/orgs',
      repos_url: 'https://api.github.com/users/robskrob/repos',
      events_url: 'https://api.github.com/users/robskrob/events{/privacy}',
      received_events_url: 'https://api.github.com/users/robskrob/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'jghlt',
      id: 805201,
      node_id: 'MDQ6VXNlcjgwNTIwMQ==',
      avatar_url: 'https://avatars2.githubusercontent.com/u/805201?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jghlt',
      html_url: 'https://github.com/jghlt',
      followers_url: 'https://api.github.com/users/jghlt/followers',
      following_url: 'https://api.github.com/users/jghlt/following{/other_user}',
      gists_url: 'https://api.github.com/users/jghlt/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/jghlt/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jghlt/subscriptions',
      organizations_url: 'https://api.github.com/users/jghlt/orgs',
      repos_url: 'https://api.github.com/users/jghlt/repos',
      events_url: 'https://api.github.com/users/jghlt/events{/privacy}',
      received_events_url: 'https://api.github.com/users/jghlt/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'crawbuck',
      id: 33499234,
      node_id: 'MDQ6VXNlcjMzNDk5MjM0',
      avatar_url: 'https://avatars0.githubusercontent.com/u/33499234?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/crawbuck',
      html_url: 'https://github.com/crawbuck',
      followers_url: 'https://api.github.com/users/crawbuck/followers',
      following_url: 'https://api.github.com/users/crawbuck/following{/other_user}',
      gists_url: 'https://api.github.com/users/crawbuck/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/crawbuck/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/crawbuck/subscriptions',
      organizations_url: 'https://api.github.com/users/crawbuck/orgs',
      repos_url: 'https://api.github.com/users/crawbuck/repos',
      events_url: 'https://api.github.com/users/crawbuck/events{/privacy}',
      received_events_url: 'https://api.github.com/users/crawbuck/received_events',
      type: 'User',
      site_admin: false
    },
    {
      login: 'xiaoouLi',
      id: 4204710,
      node_id: 'MDQ6VXNlcjQyMDQ3MTA=',
      avatar_url: 'https://avatars1.githubusercontent.com/u/4204710?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/xiaoouLi',
      html_url: 'https://github.com/xiaoouLi',
      followers_url: 'https://api.github.com/users/xiaoouLi/followers',
      following_url: 'https://api.github.com/users/xiaoouLi/following{/other_user}',
      gists_url: 'https://api.github.com/users/xiaoouLi/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/xiaoouLi/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/xiaoouLi/subscriptions',
      organizations_url: 'https://api.github.com/users/xiaoouLi/orgs',
      repos_url: 'https://api.github.com/users/xiaoouLi/repos',
      events_url: 'https://api.github.com/users/xiaoouLi/events{/privacy}',
      received_events_url: 'https://api.github.com/users/xiaoouLi/received_events',
      type: 'User',
      site_admin: false
    }
  ],
  following: 1,
  created_at: '2016-07-25T14:52:32Z',
  updated_at: '2020-01-06T18:13:30Z',
  followers_count: 4
}

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)
  const [page, setPage] = useState(1)

  async function fetchUser(username) {
    console.log(username)
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
      console.log(err)
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

      console.log(options)

      const {data} = await octokit.users.listFollowersForUser(options);

      console.log(user.followers)
      console.log(data)

      setUser({
        ...user,
        followers: user.followers.concat(data)
      })

      setPage(page + 1)

    } catch(err) {
      console.log(err)
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
