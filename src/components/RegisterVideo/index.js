import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(props) {
    const [values, setValues] = React.useState(props.initialValues);
    return {
        values,
        handleChange: (event) => {
            const fieldName = event.target.name;
            const value = event.target.value;
            setValues({
                ...values,
                [fieldName]: value,
            });
        },
        clearForm: () => {
            setValues({});
        }
    }
}

export default function RegisterVideos() {
    const form = useForm({
        initialValues: { titulo: "Frostpunk", url: "https://youtube..." }
    });
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => {
                setIsModalOpen(true);
            }}>
                +
            </button>
            {isModalOpen
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setIsModalOpen(false);
                        form.clearForm();

                    }}>
                        <div>
                            <button className="close-modal" onClick={() => {
                                setIsModalOpen(false);
                            }}>
                                x
                            </button>
                            <input
                                type="text"
                                name="titulo"
                                placeholder="Título do vídeo"
                                value={form.values.titulo}
                                onChange={form.handleChange}
                            />
                            <input
                                type="text"
                                name="url"
                                placeholder="URL do vídeo"
                                value={form.values.url}
                                onChange={form.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false
            }

        </StyledRegisterVideo>
    )
}