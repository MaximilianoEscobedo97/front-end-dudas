import React from 'react';
import { CardPost, CardAnswer } from '../../components/card'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const duda = {
    title: 'Esta es la vista de la duda?',
    description: 'Mi duda es que sera de mi.',
    number: 0
}

const answers = [
    {
        title: 'Esta es la vista de la duda?',
        description: 'Mi duda es que sera de mi.',
        name: 'Maxghostter',
        date: '25/02/2021',

    },
    {
        title: 'Esta es la vista de la duda?',
        description: 'Mi duda es que sera de mi.',
        name: 'Maxghostter',
        date: '25/02/2021',

    },
    {
        title: 'Esta es la vista de la duda?',
        description: 'Mi duda es que sera de mi.',
        name: 'Maxghostter',
        date: '25/02/2021',

    },
    {
        title: 'Esta es la vista de la duda?',
        description: 'Mi duda es que sera de mi.',
        name: 'Maxghostter',
        date: '25/02/2021',

    }
]

export const Post = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={2} />
                <Grid item xs={6}>
                    <div className='m-4'>
                        <CardPost
                            title={duda.title}
                            description={duda.description}
                            number={duda.number}
                        />
                    </div>
                    <h1 className=' m-3'>Respuestas:</h1>
                    {answers.map((answer, key) =>
                        <div className='m-3' key={key}>
                            <CardAnswer
                                title={answer.title}
                                description={answer.description}
                                name={answer.name}
                                date={answer.date}
                            />
                        </div>
                    )}

                    <div className=' m-3'>
                        <form>
                            <TextField
                                label="Titulo"
                                name="title"
                                fullWidth
                                className='Card-body'
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                label="Comentario"
                                name="comment"
                                fullWidth
                                className='Card-body'
                                margin="normal"
                                multiline
                                textarea
                                rows={10}
                                variant="outlined"
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                className='aling-center'
                            >
                                Comentar
                            </Button>
                        </form>
                    </div>

                </Grid>
                <Grid item xs={2} />

            </Grid>


        </div>
    )
}