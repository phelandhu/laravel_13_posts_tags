import { usePage } from '@inertiajs/react';

export default function Students() {
    const { foo, boo } = usePage().props;

    return (
        <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">Students</h1>
            <p className="mt-4">Foo: {foo}</p>
            <p className="mt-2">Boo: {boo}</p>
        </div>
    );
}