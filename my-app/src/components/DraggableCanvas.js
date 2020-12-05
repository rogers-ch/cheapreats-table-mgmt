import React from 'react';
import Draggable from 'react-draggable';
import {RectangleTable2, SquareTable2} from "../stories";
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
                <h5 className="pb-2 font text-center">Drag the tables and create your own design!</h5>
                <div className="bg-transparent shadow-lg rounded">
                    <div className="box" style={{height: '600px', width: '1075px', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <div style={{height: '600px', width: '1075px', padding: '10px'}}>

                            <CapacityDisplay className="bg-dark float-right" totalNumberOfSeats={20} totalSeatsOccupied={14}/>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 125, y: 45}} >
                                <div className="box rectangleTwoTopWidth">
                                    <RectangleTable2
                                        tableID='T4'
                                        partyName=''
                                        occupancyStatus='Vacant'
                                        relativeSize = {0.3}
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
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 125, y: 225}} >
                                <div className="box rectangleTwoTopWidth">
                                    <RectangleTable2
                                        tableID='T9'
                                        numOfChairs={2}
                                        partyName='Tina'
                                        occupancyStatus='Occupied'
                                        relativeSize = {0.3}
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
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 425, y: -275}}>
                               <div className="box rectangleFourTopWidth">
                                    <div className="pt-5">
                                        <RectangleTable2
                                            tableID='T2'
                                            partyName='Sarah'
                                            occupancyStatus='Occupied'
                                            relativeSize = {0.3}
                                            chairs={[
                                                {
                                                    position: 'top',
                                                    isSeated: true,
                                                    occupiedBy: 'Sarah',
                                                    isVisible: true,
                                                },
                                                {
                                                    position: 'top',
                                                    isSeated: false,
                                                    occupiedBy: '',
                                                    isVisible: true
                                                },
                                                {
                                                    position: 'bottom',
                                                    isSeated: false,
                                                    occupiedBy: '',
                                                    isVisible: true
                                                },
                                                {
                                                    position: 'bottom',
                                                    isSeated: true,
                                                    occupiedBy: 'Alex',
                                                    isVisible: true,
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 425, y: -135}}>
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
                                                occupiedBy: 'Corey',
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
                                                occupiedBy: 'Sam',
                                                isVisible: true,
                                            },
                                        ]}
                                        relativeSize = {0.3}
                                    />
                                </div>
                            </Draggable>

                            <Draggable bounds="parent" {...dragHandlers} defaultPosition={{x: 775, y: -295}}>
                                <div className="box rectangleFourTopWidth">
                                    <RectangleTable2
                                        tableID='T7'
                                        partyName='Dmytro'
                                        occupancyStatus='Reserved'
                                        relativeSize = {0.3}
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
                            </Draggable>


                        </div>
                    </div>
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