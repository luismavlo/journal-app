import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'

import AuthRouter from './AuthRouter'
import DashboardRouter from './DashboardRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { firebase } from '../firebase/firebase-config'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/auth'
import LoadingScreen from '../components/extras/LoadingScreen'
import { startLoadingNotes } from '../redux/actions/notes'

const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if(user?.uid){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
                dispatch( startLoadingNotes( user.uid ) );
            }else{
                setIsLoggedIn( false );
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking){
        return(
            <LoadingScreen />
        )
    }


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/*' element={
                <PublicRoute isLoggedIn={isLoggedIn}>
                    <AuthRouter />
                </PublicRoute>
            } />
            <Route path='/*' element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                    <DashboardRouter />
                </PrivateRoute>
            }/>
        </Routes>  
    </BrowserRouter>
  )
}

export default AppRouter