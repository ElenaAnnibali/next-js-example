import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RegisterResponseBody } from './api/register';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<
    {
      message: string;
    }[]
  >([]);
  const router = useRouter();

  async function registerHandler() {
    const registerResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const registerResponseBody: RegisterResponseBody =
      await registerResponse.json();

    console.log(registerResponseBody);

    // if we have errors
    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
    }

    // redirect user to home
    await router.push('/');

    // you may want to return to the user profile too
    // await router.push(`/users/${registerResponseBody.user.id}`);
  }

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="registration" content="Register a new user" />
      </Head>
      <main>
        <h1>Register</h1>
        <label>
          username:{' '}
          <input
            value={username}
            onClick={(event) => {
              setUsername(event.currentTarget.value);
            }}
          />
        </label>
        <label>
          password:{' '}
          <input
            value={password}
            onClick={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
        </label>
        <button onClick={() => registerHandler()}>Register</button>
        {errors.length &&
          errors.map((error) => (
            <span key={`error-${error.message}`}>{error.message}</span>
          ))}
      </main>
    </div>
  );
}
