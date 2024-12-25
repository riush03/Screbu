import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { getSession } from "next-auth/react";
import * as z from 'zod';
import { useRouter } from 'next/navigation';

const userSchema = z.object({
    email: z.string().min(1, "Email is required").email('Invalid email'),
    username: z.string().min(1, "Username is required").max(100),
    password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters")
});

type SignupData = z.infer<typeof userSchema>;

export const useAuth = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            setErrors({});

            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setErrors({ auth: 'Invalid credentials' });
                return false;
            }

            if (result?.ok) {
                const session = await getSession();
                console.log(session?.user);
                if (session?.user?.email === 'admin@admin.com') {
                    router.push('/admin');
                } else {
                    router.push('/');
                }
            }
            return true;
        } catch (error) {
            setErrors({ auth: 'An error occurred during login' });
            return false;
        } finally {
            setLoading(false);
        }
    };

    const signup = async (data: SignupData) => {
        try {
            setLoading(true);
            setErrors({});

            // Validate input data
            userSchema.parse(data);

            const response = await fetch('/api/auth/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Signup failed');
            }

            // Automatically login after successful signup
            if (response.status === 201) {
                return await login(data.email, data.password);
            }

            return false;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        fieldErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(fieldErrors);
            } else if (error instanceof Error) {
                setErrors({ auth: error.message });
            } else {
                setErrors({ auth: 'An unexpected error occurred' });
            }
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { login, signup, errors, loading };
};