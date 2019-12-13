import React, { Fragment } from 'react';
import { getAutores } from '../../service/nytimes';
import Input from './components/Input';
import LivroAutores from './components/LivroAutores';
import Button from '../../components/Button';
import Header from '../../components/Header'
import './styles.css';

class Autores extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            autores: [],
            pesquisado: false
        }
    }

    handleChange = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(() => {
            return {
                value: ""
            }
        }, () => {
            setTimeout(() => {
                this.setState(() => {
                    return {
                        pesquisado: true
                    }
                })
            }, 1000)
        })
    }

    handleSearch = () => {
        getAutores(this.state.value).then((response) => {
            this.setState({
                autores: response.data.results
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <Header
                    titulo="Busque seus autores favoritos"
                    classe="autores-header"
                />
                <div className="container autores">
                    <div className="divAutores">
                        <p className="textoIntro">Aqui você pode pesquisar por um autor ou autora e ler as resenhas publicadas pelo jornal <span className="nomeSite">The New York Times</span> a respeito dos seus livros.</p>
                    </div>
                    <div className="divSearch">
                        <form onSubmit={this.handleSubmit}>
                            <Input
                                placeholder="Pesquise o nome de um autor ou autora"
                                tipo="text"
                                getInputValue={this.handleChange}
                                value={this.state.value}
                            />
                            <div className="divBtn">
                                <Button funcao={this.handleSearch}>
                                    Pesquisar
                            </Button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {this.state.autores.length > 0
                            ? this.state.autores.map((item, index) => {
                                return <LivroAutores key={index} {...item} />
                            })
                            : this.state.pesquisado ? <div className="divLoading">
                                <span className="loading">Nenhum resultado encontrado...</span>
                            </div> : ""
                        }
                    </div>
                </div>
            </Fragment>
        )
    }

}


export default Autores;