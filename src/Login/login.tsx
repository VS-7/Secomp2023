import { render } from "@testing-library/react";

import React, { Component } from "react";
import "./login.css";
import { signInWithGooglePopup } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';


export default class Login extends Component<any>{
    state:any = {};
    constructor(props: any) {

        super(props)
        this.setState({
            login:"",
            senha:""
        })

    }

    googleClick = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    loginClick = async () => {

        const docRef = await addDoc(collection(db, "usuarios"), {
            usuario: this.state,    
          });

    };

    render() {
        return (<div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 loginScreen">
                        <div className="row inputs justify-content-center">
                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Login</label>
                                    <input type="text" name="codigo" className="form-control" value={this.state.login} onChange={(e) => this.setState({login: e.target.value})} />
                                </div>
                            </div>

                            <div className="col-12 ibox-col">
                                <div className="form-group">
                                    <label className="text-default">Senha</label>
                                    <input type="password" name="codigo" className="form-control" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
                                </div>
                            </div>
                            <div className="col-4 loginButton">
                                <button type="button" className="btn btn-primary" onClick={this.loginClick}>Salvar Login</button>
                            </div>

                            <div className="col-12 ibox-col"></div>
                            <div className="col-4 loginButton">
                                <button type="button" className="btn btn-secondary" onClick={this.googleClick}>Google</button>
                            </div>
                            <div className="col-12 ibox-col"></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        );

    }
}