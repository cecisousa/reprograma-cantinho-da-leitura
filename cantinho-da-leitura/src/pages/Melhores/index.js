import React, { Fragment } from 'react';
import Header from '../../components/Header';
import LivroMelhores from './components/LivroMelhores';
import { getMelhores } from '../../service/nytimes';


class Melhores extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getMelhores()
            .then(response => {
                this.setState({
                    posts: response.data.results.lists.map(item => {
                        return item.books
                    })
                })

            })

            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <Fragment>
                <Header
                    titulo="Os melhores livros da semana"
                    classe="melhores-header"
                />
                <section>
                    <div>
                        {this.state.posts.length > 0
                            ? this.state.posts.map(item => {
                                return item.flatMap(livro => {
                                    return <LivroMelhores key={livro.primary_isbn13} {...livro} />
                                })
                            })
                            : <span>Carregando a lista de livros! ;)</span>
                        }
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Melhores;
