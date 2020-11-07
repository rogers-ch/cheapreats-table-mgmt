import React from 'react';
import {RectangleTable, SquareTable} from "../stories";

function CanvasDemo() {
    return(
        <div className='border border-dark canvas'>

            {/* Row 1 */}
            <div className="row py-3 pl-3">
                <div className="col-6">
                    <div className="d-inline-block pt-5 pl-4 pr-3">
                        <RectangleTable
                            tableID='T1'
                            numOfChairs={2}
                            partyName='Corey'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block pt-5 pl-4 pr-3">
                        <RectangleTable
                            tableID='T2'
                            numOfChairs={2}
                            partyName=''
                            occupancyStatus='Vacant'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block pt-5 pl-4">
                        <RectangleTable
                            tableID='T3'
                            numOfChairs={2}
                            partyName='Steph'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />
                    </div>
                </div>

                <div className="col-3">
                    <div className="pt-5">
                        <RectangleTable
                            tableID='T4'
                            numOfChairs={4}
                            partyName='Sarah'
                            occupancyStatus='Reserved'
                            relativeSize = {0.3}
                        />

                    </div>

                </div>

                <div className="col-3">
                    <SquareTable
                        tableID='T5'
                        numOfChairs={7}
                        partyName='Dmytro'
                        occupancyStatus='Occupied'
                        relativeSize = {0.3}
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="row py-3 pl-4">
                <div className="col-4">
                    <div className="py-4 px-4">
                        <RectangleTable
                            tableID='T6'
                            numOfChairs={6}
                            partyName='Scott'
                            occupancyStatus='Occupied'
                            relativeSize = {0.3}
                        />

                    </div>
                </div>

                <div className="col-8 pr-4">
                    <div className="d-inline-block py-4 pl-4 pr-3">
                        <RectangleTable
                            tableID='T7'
                            numOfChairs={2}
                            partyName=''
                            occupancyStatus='Vacant'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block p-3">
                        <RectangleTable
                            tableID='T8'
                            numOfChairs={2}
                            partyName='Megan'
                            occupancyStatus='Reserved'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block p-3">
                        <RectangleTable
                            tableID='T9'
                            numOfChairs={2}
                            partyName=''
                            occupancyStatus='Vacant'
                            relativeSize = {0.3}
                        />
                    </div>

                    <div className="d-inline-block p-3">
                        <RectangleTable
                            tableID='T10'
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
                <div className="col-3">
                    <RectangleTable
                        tableID='T11'
                        numOfChairs={4}
                        partyName=''
                        occupancyStatus='Vacant'
                        relativeSize = {0.3}
                    />
                </div>

                <div className="col-3">
                    <RectangleTable
                        tableID='T12'
                        numOfChairs={4}
                        partyName='Ted'
                        occupancyStatus='Reserved'
                        relativeSize = {0.3}
                    />
                </div>

                <div className="col-3">
                    <RectangleTable
                        tableID='T13'
                        numOfChairs={4}
                        partyName=''
                        occupancyStatus='Vacant'
                        relativeSize = {0.3}
                    />
                </div>

                <div className="col-3">
                    <RectangleTable
                        tableID='T14'
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