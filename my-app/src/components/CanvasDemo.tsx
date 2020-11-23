import React from 'react';
import {RectangleTable, SquareTable} from "../stories";
import '../css/canvas.css';

function CanvasDemo() {
    return(
        <div className='bg-transparent shadow-lg rounded canvas'>

            {/* Row 1 */}
            <div className="row py-3 pl-3">
                <div className="col-3">

                    <div className="d-inline-block pt-5 pl-4 pr-3">
                        <RectangleTable
                            tableID='T1'
                            numOfChairs={2}
                            partyName=''
                            occupancyStatus='Vacant'
                            relativeSize = {0.3}
                        />
                    </div>

                </div>

                <div className="col-4">
                    <div className="pt-5">
                        <RectangleTable
                            tableID='T2'
                            numOfChairs={4}
                            partyName='Sarah'
                            occupancyStatus='Reserved'
                            relativeSize = {0.3}
                        />

                    </div>

                </div>

                <div className="col-5">
                    <div className="pl-4">
                        <SquareTable
                            tableID='T3'
                            numOfChairs={7}
                            partyName='Dmytro'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />
                    </div>

                </div>
            </div>

            {/* Row 2 */}
            <div className="row py-3 pl-3">
                <div className="col-5">
                    <div className="py-3 pl-3">
                        <RectangleTable
                            tableID='T4'
                            numOfChairs={6}
                            partyName='Scott'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />

                    </div>
                </div>

                <div className="col-7 pl-5">

                    <div className="d-inline-block py-3 px-2">
                        <RectangleTable
                            tableID='T5'
                            numOfChairs={2}
                            partyName='Megan'
                            occupancyStatus='Reserved'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block p-2">
                        <RectangleTable
                            tableID='T6'
                            numOfChairs={2}
                            partyName=''
                            occupancyStatus='Vacant'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block p-2">
                        <RectangleTable
                            tableID='T7'
                            numOfChairs={2}
                            partyName='Claire'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />
                    </div>
                </div>
            </div>

            {/* Row 3 */}
            <div className="row py-3 pl-3">
                <div className="col-4">
                    <RectangleTable
                        tableID='T8'
                        numOfChairs={4}
                        partyName=''
                        occupancyStatus='Vacant'
                        relativeSize = {0.3}
                    />
                </div>

                <div className="col-4">
                    <RectangleTable
                        tableID='T9'
                        numOfChairs={4}
                        partyName='Ted'
                        occupancyStatus='Reserved'
                        relativeSize = {0.3}
                    />
                </div>

                <div className="col-4">
                    <RectangleTable
                        tableID='T10'
                        numOfChairs={4}
                        partyName='Jeffrey'
                        occupancyStatus='Occupied'
                        relativeSize = {0.3}
                    />
                </div>
            </div>
        </div>

    );
}

export default CanvasDemo;