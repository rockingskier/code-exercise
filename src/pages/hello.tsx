
import { User } from '@prisma/client';
import { prisma } from '../prisma';

export async function getServerSideProps() {
    const users = await prisma.user.findMany()

    return {
        props: { users }
    }
}

export default function Home({ users }: { users: User[] }) {
    return (
        <>
            <p>Hello world!</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}