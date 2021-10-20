import { 
    IonContent, 
    IonHeader,
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonButton,
    IonInput,
  } from '@ionic/react';
  import React, { useEffect, useState,} from 'react';
  import { Link } from 'react-router-dom'
  import { registerUser } from '../firebaseConfig';
  import { RouteComponentProps } from 'react-router'
  
const Register: React.FC<RouteComponentProps> = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function RegisterUser() {
        const res = await registerUser(email, password)
        console.log(res)
        history.push('/login')
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <IonInput 
                placeholder="Email?"
                onIonChange={(e: any) => setEmail(e.target.value)}
            />
            <IonInput 
                type="password"
                placeholder="Password?" 
                onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <IonInput 
                type="password"
                placeholder="Confirm Password?" 
                onIonChange={(e: any) => setCPassword(e.target.value)}
            />
             <IonButton onClick={RegisterUser}>Register</IonButton>
            <p>
              Already have an account? 
              <Link to="/login">Login</Link>
            </p>
        </IonContent>
      </IonPage>
    )
  }
  
  export default Register
  