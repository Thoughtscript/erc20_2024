'use strict'

/**
 *  RailsPage page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import UnsplashSection from '../../Presentation/UnsplashSection'
import './MyCoin.css'
import { network, balance } from '../../../Helpers/ERC20Facade'
import { mapToArr } from '../../../Helpers/Generic'
import { CONTRACT_ADDRESS } from '../../../Constants'

export class MyCoin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accountMap: {
                "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E": 0,
                "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc": 0,
                "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720": 0,
                "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC": 0,
                "0xdD2FD4581271e230360230F9337D5c0430Bf44C0": 0,
                "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955": 0,
                [`${CONTRACT_ADDRESS}`]: 0
            },
            accounts: [],
            ...this.props
        }
    }

    componentDidMount() {
        try {
            network().connect().then(provider => {
                const K = Object.keys(this.state.accountMap)

                let promises = []

                for (let i = 0; i < K.length; i++) {
                    promises.push(balance(K[i]))
                }

                Promise.all(promises).then(success => {
                    let temp = Object.assign({}, this.state.accountMap)

                    for (let i = 0 ; i < success.length; i++) {
                        temp[K[i]] = `${success[i] / 1000000000000000000n}`
                    }

                    this.setState({
                        accountMap: temp,
                        accounts: mapToArr(temp)
                    })
                })
            })

        } catch (ex) {
            console.log(ex)
        }
    }

    render() {
        const { accounts } = this.state

        return (
            <main className="landingPage">
                <UnsplashSection photo={'1559251606-c623743a6d76'} ixid={'M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} w={'3870'}/>
                
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                (accounts).map(a =>
                                    <tr key={a[0]}>
                                        <td>{a[0] === CONTRACT_ADDRESS ? `(MyCoin) ${a[0]}`: a[0]}</td>
                                        <td>{a[1]} ETH</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className="content">
                    <div className="text">
                        Lorem Ipsum
                    </div>
                </div> 
                       
                <div className="content">
                    <div className="text">
                        Lorem Ipsum
                    </div>
                </div>
            </main>
        )
    }
}