import styled from "styled-components";
import Global from "./Global";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "./config";
import Chat from "./Chat";
import SignIn from "./SignIn";
import { collection, orderBy, query } from "@firebase/firestore";

const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  background: hsl(210, 60%, 20%);
  border-radius: 6px;
`;

function App() {
  const [user] = useAuthState(auth);
  //returns a object containing current user data if user is logged in
  const q = query(collection(db, "messages"), orderBy("createdAt"));
  //query in data base and return the documents in order of the time they're created in
  const [values] = useCollectionData(q);
  //upldate the react ui in real time based on changes in data base

  return (
    <>
      <Global />
      <Wrapper>
        {user ? (
          <Chat
            currentUserId={user.uid}
            values={values ? values : []}
            pfp={user.photoURL}
            name={user.displayName}
            email={user.email}
          />
        ) : (
          <SignIn />
        )}
      </Wrapper>
    </>
  );
}

export default App;
