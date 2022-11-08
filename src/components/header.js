import config from "/config.json"
import styled from "styled-components";

const StyledHeader = styled.div`
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-bg-pic {
        width: 100%;
        height: 200px;
        background-color: #000;
    }
    .user-bg-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <section className="user-bg-pic">
                <img src={config.bg_image}></img>
            </section>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div className="user-bio">
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.jobTitle}
                    </p>

                </div>
            </section >

        </StyledHeader >
    );
}

export default Header