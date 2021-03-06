import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import {RectangleTable} from "../stories/RectangleTable";
import {SquareTable} from "../stories/SquareTable";
import {CapacityDisplay} from "./CapacityDisplay";

export class DraggableCanvas extends React.Component {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    };

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };

    onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
    };

    onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
    };

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        return (
            <div className="pb-3 container">
                <Pb2TextAlignCenter className="font">Drag the tables and create your own design!</Pb2TextAlignCenter>
                <BgTransparentShadowLarge>
                    <Box style={{height: '600px', width: '1075px', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <div style={{height: '600px', width: '1075px', padding: '10px'}}>

                            <CapacityDisplay className="styleForCapacityDisplay" totalNumberOfSeats={20} totalSeatsOccupied={14}/>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 125, y: 45}} >
                                <Box className="rectangleTwoTopWidth">
                                    <RectangleTable
                                        tableID='T4'
                                        numOfChairs={2}
                                        partyName=''
                                        occupancyStatus='Vacant'
                                        relativeSize = {0.3}
                                    />
                                </Box>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 125, y: 225}} >
                                <Box className="rectangleTwoTopWidth">
                                    <RectangleTable
                                        tableID='T9'
                                        numOfChairs={2}
                                        partyName='Tina'
                                        occupancyStatus='Occupied'
                                        relativeSize = {0.3}
                                    />
                                </Box>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 425, y: -275}}>
                               <Box className="rectangleFourTopWidth">
                                    <div className="pt-5">
                                        <RectangleTable
                                            tableID='T2'
                                            numOfChairs={4}
                                            partyName='Sarah'
                                            occupancyStatus='Occupied'
                                            relativeSize = {0.3}
                                        />
                                    </div>
                                </Box>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 425, y: -135}}>
                                <Box className="squareEightTopWidth">
                                    <SquareTable
                                        tableID='T5'
                                        numOfChairs={7}
                                        partyName='Scott'
                                        occupancyStatus='Occupied'
                                        relativeSize = {0.3}
                                    />
                                </Box>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 775, y: -295}}>
                                <Box className="rectangleFourTopWidth">
                                    <RectangleTable
                                        tableID='T7'
                                        numOfChairs={4}
                                        partyName='Dmytro'
                                        occupancyStatus='Reserved'
                                        relativeSize = {0.3}
                                    />
                                </Box>
                            </Draggable>


                        </div>
                    </Box>
                </BgTransparentShadowLarge>
            </div>
        );
    }
}

const Box = styled.div`
        box-sizing: border-box;
    `;

const Pb2TextAlignCenter = styled.div`
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    text-align: center;
`;

const BgTransparentShadowLarge = styled.div`
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    border-radius: 0.25rem;
    background-color: transparent;
`;

class RemWrapper extends React.Component {
    // PropTypes is not available in this environment, but here they are.
    // static propTypes = {
    //   style: PropTypes.shape({
    //     transform: PropTypes.string.isRequired
    //   }),
    //   children: PropTypes.node.isRequired,
    //   remBaseline: PropTypes.number,
    // }

    translateTransformToRem(transform, remBaseline = 16) {
        const convertedValues = transform.replace('translate(', '').replace(')', '')
            .split(',')
            .map(px => px.replace('px', ''))
            .map(px => parseInt(px, 10) / remBaseline)
            .map(x => `${x}rem`)
        const [x, y] = convertedValues

        return `translate(${x}, ${y})`
    }

    render() {
        const { children, remBaseline = 16, style } = this.props
        const child = React.Children.only(children)

        const editedStyle = {
            ...child.props.style,
            ...style,
            transform: this.translateTransformToRem(style.transform, remBaseline),
        }

        return React.cloneElement(child, {
            ...child.props,
            ...this.props,
            style: editedStyle
        })
    }
}

export default DraggableCanvas;