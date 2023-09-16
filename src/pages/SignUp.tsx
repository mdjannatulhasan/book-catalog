import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import BtnPrimary from '@/components/common/BtnPrimary';
import { setUser } from '@/redux/features/user/userSlice';
import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useToast } from '@/components/ui/use-toast';
import {
    useAddUserMutation,
    useLoginUserMutation,
} from '@/redux/features/user/userApi';

const SignUp = () => {
    const [createUser, { error, isLoading }] = useAddUserMutation();
    const [loginUser] = useLoginUserMutation();
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { email } = useAppSelector((state) => state.user);
    const { state } = useLocation();
    const [password, setPassword] = useState('');
    const [retypePass, setRetypePassword] = useState('');

    useEffect(() => {
        if (email) {
            navigate(state && state.path ? state.path : '/');
        }
    }, [email]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as HTMLFormElement).email.value;
        const body = {
            email: email,
            password: password,
        };

        try {
            const response = await createUser({ data: body }).then(
                async () => await loginUser({ data: body })
            );
            console.log(response);

            if ('data' in response) {
                const token = response.data.data.accessToken;
                localStorage.setItem('id', response.data.data.id);
                localStorage.setItem('role', response.data.data.role);
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);

                dispatch(
                    setUser({
                        email: email,
                        id: response.data.data.id,
                        role: response.data.data.role,
                    })
                );
                toast({
                    variant: 'success',
                    title: 'Login successfull.',
                    description: '',
                });
            } else {
                const errorMessage =
                    'data' in response.error
                        ? (response.error.data as { message: string })?.message
                        : 'Something Went Wrong';
                localStorage.removeItem('id');
                localStorage.removeItem('role');
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                dispatch(setUser(''));
                toast({
                    variant: 'destructive',
                    title: 'Login Failed.',
                    description: errorMessage,
                });
            }
        } catch (e) {
            console.log(error);

            toast({
                variant: 'destructive',
                title: 'Uh oh! Login Failed.',
                description: 'There was a problem with your request.',
            });
        }
    };
    return (
        <section className="flex flex-col h-[100vh] justify-center items-center">
            <Link to="/">
                <img className="h-[50px]" src={logo} alt="log" />
            </Link>
            <Tabs defaultValue="account" className="max-w-[400px] w-full mt-5">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Registration</TabsTrigger>
                    <TabsTrigger value="password">Existing User?</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Please enter your information to register
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="email" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="retypePassword">
                                        Retype Password
                                    </Label>
                                    <Input
                                        className={`${
                                            password !== retypePass &&
                                            'bg-[#ffcece]'
                                        }`}
                                        onChange={(e) =>
                                            setRetypePassword(e.target.value)
                                        }
                                        id="retypePassword"
                                        type="password"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <BtnPrimary
                                    disabled={password !== retypePass}
                                    fullWidth
                                    type="submit"
                                >
                                    {isLoading
                                        ? 'Registering. Please wait.....'
                                        : 'Register'}
                                </BtnPrimary>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome</CardTitle>
                            <CardDescription>
                                Please click below to go to the login page
                            </CardDescription>
                        </CardHeader>

                        <CardFooter>
                            <BtnPrimary fullWidth link to="/signin">
                                Login
                            </BtnPrimary>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default SignUp;
