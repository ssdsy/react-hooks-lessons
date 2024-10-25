import { ChangeEvent, useState } from "react";

const Lesson1_2 = () => {
    // オブジェクトとしてstateを持つ
    const [form, setForm] = useState({
        firstName: "Code",
        lastName: "Shin",
        email: "test@example.com",
    });
    return (
        <div>
            <div className="flex mb-5">
                <label>
                    First Name:
                    <input
                        type="text"
                        className="border border-slate-500"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                                ...form,
                                firstName: e.target.value,
                                // lastName: form.lastName,
                                // email: form.email,
                            })
                        }
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        className="border border-slate-500"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                                ...form,
                                // firstName: form.firstName,
                                lastName: e.target.value,
                                // email: form.email,
                            })
                        }
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        className="border border-slate-500"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setForm({
                                ...form,
                                // firstName: form.firstName,
                                // lastName: form.lastName,
                                email: e.target.value,
                            })
                        }
                    />
                </label>
            </div>
            <p>
                {form.firstName}
                <br />
                {form.lastName}
                <br />
                {form.email}
            </p>
        </div>
    );
};

export default Lesson1_2;
