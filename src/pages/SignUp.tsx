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
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import BtnPrimary from '@/components/common/BtnPrimary';

const SignUp = () => {
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
                    <form action="">
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
                                    <Label htmlFor="username">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <BtnPrimary fullWidth type="submit">
                                    Register
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
