function formatUser(user) {
    return user.firstName + ' ' + user.lastName;
}

function GreetUser(props){
    return <h1>Hello, {formatUser(props.user)}!</h1>;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo author={props.author}></UserInfo>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {props.date}
        </div>
      </div>
    );
  }

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            width='40px'
            height='40px'
        />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.author}></Avatar>
            <br></br>
            {props.author.name}
        </div>
    )
}

const comment1 = {
    author: {
        avatarUrl: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=',
        name: 'user1'
    },
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    date: '2017-12-01'
}

const comment2 = {
    author: {
        avatarUrl: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=',
        name: 'user2'
    },
    text: 'lorem consectetur adipiscing',
    date: '2017-11-01'
}

const comments = [comment1, comment2]

function App() {
    return (
        <div>
            <GreetUser user={user}></GreetUser>
            <GreetUser user={user}></GreetUser>
            {comments.map((comment, i) => {
                console.log(i)
                return (
                    <Comment 
                        author={comment.author}
                        text={comment.text}
                        date={comment.date}>
                    </Comment>
                )
            })}
        </div>
    )
}

export default App;
