'use strict'

/**
 *  RailsPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import UnsplashSection from '../../Presentation/UnsplashSection'
import './MyCoin.css'
import YouTubeComponent from "../../Presentation/YouTubeComponent";
import { network, balance } from '../../../Helpers/ERC20Facade'
import { CONTRACT_ADDRESS } from '../../../Constants'

export class MyCoin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provider: undefined,
            balance: 0,
            ...this.props
        }
    }

    componentDidMount() {
        try {
            network().connect().then(provider => {
                balance("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E").then(balance => {
                    this.setState({
                        provider: provider,
                        balance: `${balance / BigInt('1000000000000000000')}`,
                    })
                })
            })

        } catch (ex) {
            console.log(ex)
        }
    }

    render() {
        const { balance } = this.state

        return (
            <main className="landingPage">
                <UnsplashSection photo={'1591858219137-84737f6e8a67'} ixid={'eyJhcHBfaWQiOjEyMDd9'} />
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{CONTRACT_ADDRESS}</th>
                                <th>{balance} ETH</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <YouTubeComponent className="more" url={"https://www.youtube.com/embed/W93XyXHI8Nw"} />
            </main>
        )
    }
}