
import './Login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const Nav=useNavigate();
    const submit=(value)=>{
        console.log(value);
        if((value.username==='abhi@gmail.com')&&(value.pass==='abhi123')){
            console.log('login sucessfull');
            sessionStorage.setItem('auth',true);
            toast('login sucessfull');
            Nav('/');
        }
        else if((value.username!=='abhi@gmail.com')||(value.pass!=='abhi123')){
            console.log('wrong cred!');
            toast('wrong cred!');
        }
    };
    const loginSchema=Yup.object().shape({
        username:Yup.string().min(5,'Must Be 5 Charecter ')
        .required('Required!').email('Invalid email'),
        pass:Yup.string().required('Required!')
    })
    return(
        <>
            <div className="loginwarraper">
                <div className='sublogindiv'>
                <div className='headerdiv'>
                    <h2>Login</h2>
                </div>
                <Formik
                initialValues={{
                    username:'',
                    pass:''
                }}
                validationSchema={loginSchema}
                onSubmit={submit}
                >
                    {({ errors, touched }) => (
                    <Form style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignContent:'space-evenly'}} on>
                        <div className='inputdiv'>
                            <label>UserName: </label>
                            <Field className='loginInput'type='text' name='username' placeholder="Enter your user-Name"/>
                            {errors.username&&touched.username?(
                                <p className='error'>{errors.username}</p>
                            ):null}
                        </div>
                        <div className='inputdiv'>
                            <label>Password: </label>
                            <Field className='loginInput' type={'password'} name='pass'  placeholder="Enter your Password"/>
                            {errors.pass&&touched.pass?(
                                <p className='error'>{errors.pass}</p>
                            ):null}
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                    )}
                </Formik>
                </div>
                
            </div>
            <ToastContainer/>
        </>
    )
};

export default Login;