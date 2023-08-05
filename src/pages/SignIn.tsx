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
import { FormEvent, useEffect } from 'react';
import { useLoginUserMutation } from '@/redux/features/user/userApi';
import { useToast } from '@/components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setUser } from '@/redux/features/user/userSlice';

const SignIn = () => {
    const [loginUser, { error }] = useLoginUserMutation();
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { email } = useAppSelector((state) => state.user);
    const { state } = useLocation();
    console.log(state);

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
            password: (e.target as HTMLFormElement).password.value,
        };

        try {
            const response = await loginUser({ data: body });
            console.log(response);

            if ('data' in response) {
                const token = response.data.data.accessToken;
                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                dispatch(setUser(email));
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
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                dispatch(setUser(''));
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Login Failed.',
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
                    <TabsTrigger value="account">Sign In</TabsTrigger>
                    <TabsTrigger value="password">New User?</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Please enter your email and password to
                                    login
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <BtnPrimary fullWidth type="submit">
                                    Login
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
                                Please click below to go to the registration
                                page
                            </CardDescription>
                        </CardHeader>

                        <CardFooter>
                            <BtnPrimary fullWidth link to="/signup">
                                Register now
                            </BtnPrimary>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
};

export default SignIn;
