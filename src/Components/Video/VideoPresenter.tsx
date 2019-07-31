import React from "react"
import styled from "styled-components"
import { FiArrowLeft, FiRepeat } from "react-icons/fi"
import {
    FaStepBackward,
    FaPlay,
    FaPause,
    FaStepForward,
    FaClosedCaptioning
} from "react-icons/fa"

const StyledContainer = styled.div`
    background: black;
    height: 100vh;
    color: white;

    .header {
        width: 100%;
        display: flex;
        justify-content: center;

        .back {
            position: absolute;
            top: 14px;
            left: 14px;
            font-size: 3em;
            cursor: pointer;

            @media screen and (max-width: 768px) {
                font-size: 2em;
            }
        }

        .player {
            width: calc(100% - 12em);
            height: 600px;
            background: gray;

            @media screen and (max-width: 1550px) {
                height: 500px;
            }

            @media screen and (max-width: 1024px) {
                height: 300px;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                height: 230px;
                margin-top: 4em;
            }
        }
    }

    .subtitle {
        padding-top: 1em;
        padding-bottom: 1em;
        text-align: center;
        font-size: 1.8em;

        @media screen and (max-width: 768px) {
            font-size: 1.3em;
        }
    }

    .controller {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
            position: relative;
            font-size: 2em;
            margin-left: 1em;
            margin-right: 1em;
            cursor: pointer;
            display: flex;
            align-items: center;

            @media screen and (max-width: 768px) {
                font-size: 1.5em;
                margin-left: 0.8em;
                margin-right: 0.8em;
            }

            &.caption {
                font-size: 1.8em;

                @media screen and (max-width: 768px) {
                    font-size: 1.5em;
                }
            }

            .non-icon {
                position: absolute;
                width: 1.4em;
                height: 2px;
                background: white;
                border-radius: 4px;
                transform: rotate(-45deg);
            }
        }
    }
`

const VideoPresenter: React.FC = () => {
    return (
        <StyledContainer>
            <div className="header">
                <div className="back">
                    <FiArrowLeft />
                </div>
                <div className="player" />
            </div>

            <div className="subtitle">
                Hey Muthurfucker
            </div>
            <div className="controller">
                <div className="caption icon" title="Subtitle on/off">
                    <FaClosedCaptioning />
                    <div className="non-icon" />
                </div>
                <div className="prev icon" title="Prev section">
                    <FaStepBackward />
                </div>
                <div className="play icon" title="Play/Pause">
                    <FaPlay />
                </div>
                <div className="next icon" title="Next section">
                    <FaStepForward />
                </div>
                <div className="section-repeat icon" title="Section repeat">
                    <FiRepeat />
                </div>
            </div>
        </StyledContainer>
    )
}

export default VideoPresenter
