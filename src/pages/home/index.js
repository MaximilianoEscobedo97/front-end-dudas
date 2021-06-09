import React from 'react';
import { CardPost } from '../../components/card'
import Grid from '@material-ui/core/Grid';

const dudas = [
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
    {
        title: 'Esto es una pregunta?',
        description: 'Tengo una duda de como se utiliza este componente',
        number: 3
    },
]

export const Home = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <h1 className='text-center mb-3'>Estas son las dudas:</h1>

                    {dudas.map((duda, key) => {
                        return (
                            <div className='mb-4'>
                                <CardPost
                                    key={key}
                                    title={duda.title}
                                    description={duda.description}
                                    number={duda.number}
                                />
                            </div>
                                                            
                        )
                    })}

                </Grid>
                <Grid item xs={3} />

            </Grid>


        </div>
    )
}