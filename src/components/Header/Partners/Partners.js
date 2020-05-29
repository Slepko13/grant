import React from 'react';
import './Partners.scss';
import coax from "../../../assets/images/logo/COAX.png";
import bvb from "../../../assets/images/logo/bvblogik.png";
import codeElves from "../../../assets/images/logo/CodeElves.png";
import coreValue from "../../../assets/images/logo/corevalue.png";
import devLight from "../../../assets/images/logo/devlight.png";
import eleks from "../../../assets/images/logo/Eleks.png";
import insilico from "../../../assets/images/logo/insilico.png";
import itCluster from "../../../assets/images/logo/it-cluster.png";
import itRally from "../../../assets/images/logo/ITRally.png";
import lcg from "../../../assets/images/logo/leadcapitalgroup.png";
import netFully from "../../../assets/images/logo/Netfully.jpg";
import softJourn from "../../../assets/images/logo/softjourn.png";
import softServe from "../../../assets/images/logo/softserve.png";
import tenantCloud from "../../../assets/images/logo/tenantcloud.png";
import ukietech from "../../../assets/images/logo/Ukietech.png";
import wtf from "../../../assets/images/logo/wtf.png";


function Partners() {

    const partners = [
        bvb, coax, codeElves, coreValue, devLight, eleks, insilico, itCluster, itRally, lcg, netFully, softJourn, softServe, tenantCloud, ukietech, wtf



    ]
    return (
        <div className="Partners">

            {partners.map((partner, index) => {
                return (
                    <div
                        className="partner"
                        key={index}
                        style={{

                            backgroundImage: `url(${partner})`
                        }}></div>)

                // <img src={partner} alt="name" />
            })}



        </div>

    )
}

export default Partners;
