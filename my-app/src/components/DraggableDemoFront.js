/*
    Created by:                Level Up team
    Date submitted:            12/08/2020
    File:                      DraggableDemoFront.js
    File Description:          This component creates the draggable demo for the front page. It includes the
                               example data for the tables and the capacity component in the demo.
*/

import React from 'react';
import Draggable from 'react-draggable';
import {CircleTable2, RectangleTable2, SquareTable2} from "../stories";
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
            <div className="pb-3 mb-5">
                <h5 className="pb-2 text-center">Drag the tables and create your own design!</h5>
                <div className="">

                    {/* Draggable canvas to hold the tables */}
                    <div className="box bg-transparent shadow-lg rounded mx-auto" style={{height: '700px', width: '1120px', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <div style={{height: '700px', width: '1100px', padding: '10px'}}>

                            {/* Capacity display component */}
                            <CapacityDisplay className="bg-dark float-right" totalNumberOfSeats={21} totalSeatsOccupied={11}/>

                            {/* Draggable table 1 */}
                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 150, y: 93}} >
                                <div className="box rectangleTwoTopWidth">
                                    <RectangleTable2
                                        tableID='T1'
                                        partyName=''
                                        occupancyStatus='Vacant'
                                        relativeSize = {0.4}
                                        chairs={[
                                            {
                                                position: 'top',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true
                                            },
                                        ]}
                                    />
                                </div>
                            </Draggable> {/* End draggable table 1 */}

                            {/* Draggable table 4 */}
                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 520, y: 215}} >
                                <div className="box rectangleTwoTopWidth">
                                    <RectangleTable2
                                        tableID='T4'
                                        partyName='Tina'
                                        occupancyStatus='Occupied'
                                        relativeSize = {0.4}
                                        chairs={[
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Suzy',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: true,
                                                occupiedBy: 'Tina',
                                                isVisible: true
                                            },
                                        ]}
                                    />
                                </div>
                            </Draggable> {/* End draggable table 4 */}

                            {/* Draggable table 5 */}
                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 770, y: -142}}>
                                <div className="box squareEightTopWidth">
                                    <SquareTable2
                                        tableID='T5'
                                        partyName='Scott'
                                        occupancyStatus='Occupied'
                                        chairs={[
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Scott',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true
                                            },
                                            {
                                                position: 'left',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true
                                            },
                                            {
                                                position: 'left',
                                                isSeated: true,
                                                occupiedBy: 'Jessica',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'right',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: false,
                                            },
                                            {
                                                position: 'right',
                                                isSeated: true,
                                                occupiedBy: 'Jack',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: true,
                                                occupiedBy: 'Tara',
                                                isVisible: true,
                                            },
                                        ]}
                                        relativeSize = {0.4}
                                    />
                                </div>
                            </Draggable> {/* End draggable table 5 */}

                            {/* Draggable table 3 */}
                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 90, y: -250}}>
                                <div className="box rectangleFourTopWidth">
                                    <RectangleTable2
                                        tableID='T3'
                                        partyName='Dmytro'
                                        occupancyStatus='Reserved'
                                        relativeSize = {0.4}
                                        chairs={[
                                            {
                                                position: 'top',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true
                                            },
                                            {
                                                position: 'top',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true,
                                            },
                                            {
                                                position: 'bottom',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true
                                            },
                                        ]}
                                    />
                                </div>
                            </Draggable> {/* End draggable table 3 */}

                            {/* Draggable table 2 */}
                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 450, y: -750}} >
                                <div className="box circleTableWidth">
                                    <CircleTable2
                                        tableID='T2'
                                        partyName='Corey'
                                        occupancyStatus='Occupied'
                                        relativeSize = {0.5}
                                        chairs={[
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Sarah',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: false,
                                                occupiedBy: '',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Dean',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Corey',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Claire',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                            {
                                                position: 'top',
                                                isSeated: true,
                                                occupiedBy: 'Sam',
                                                isVisible: true,
                                                isRound: true,
                                            },
                                        ]}
                                    />
                                </div>
                            </Draggable> {/* End draggable table 2 */}

                        </div>
                    </div> {/* End Draggable Canvas */}
                </div>
            </div>
        );
    }
}

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