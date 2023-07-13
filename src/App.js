import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App({ posts }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

/**
 * The connect function takes another function as an argument: mapStateToProps.
 * mapStateToProps determines what state from our store we want to pull into our component.
 * In this case, we're specifying to only pull our state's posts property.
 */
const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(App)
