import React, { Fragment } from 'react';
import { getAutores } from '../../service/nytimes';
import Input from './components/Input';
import LivroAutores from './components/LivroAutores';
import Button from '../../components/Button';
import Header from '../../components/Header'
import './styles.css';

class Autores extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            autores: []
        }
    }


    inputValue = (param) => {
        this.setState({
            value: param.target.value
        })
    }

    handleSearch = () => {      
        getAutores(this.state.value).then((response) => {
            this.setState({
                autores: response.data.results
            })
            console.log(response.data.results);

        }).catch(err => console.log(err))
    }

    render(){
        return (
            <Fragment>
                <Header
                    titulo="Busque seus autores favoritos"
                    classe="autores-header"
                />
                <Input
                    placeholder="Pesquise por um autor ou autora"
                    tipo="text"
                    getInputValue={this.inputValue}
                />
                <Button funcao={this.handleSearch}>
                    Pesquisar
                </Button>
                <div>
                    {this.state.autores.map((item, index) => {
                        return <LivroAutores key={index} {...item}/>
                    })}
                </div>
            </Fragment>
        )
    }

}


export default Autores;