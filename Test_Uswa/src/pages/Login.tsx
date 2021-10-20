import { 
    IonContent, 
    IonHeader, 
    IonPage,  
    IonTitle, 
    IonToolbar,
    IonButton,
    IonInput
  } from '@ionic/react';
  import React, { useEffect, useState } from 'react'
  import { Link } from 'react-router-dom'
  import { loginUser } from '../firebaseConfig'
  import { RouteComponentProps } from 'react-router'
  
    const Home: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const res = await loginUser(email, password)
        console.log(res)
        history.push('/profile')
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonInput 
                type="email"
                placeholder="Email?" 
                onIonChange={(e: any) => setEmail(e.target.value)}
            />
            <IonInput 
                type="password"
                placeholder="Password?" 
                onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <IonButton onClick={login}>Login</IonButton>
            <p>
              New here?
              <Link to="/register">Register</Link>
            </p>
        </IonContent>
      </IonPage>
    )
  }
  
  export default Home;
  