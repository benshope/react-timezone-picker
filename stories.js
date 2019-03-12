// @flow
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import TimezonePicker from './src'

const stories = storiesOf('Timezone Picker', module)
    .add('default', () => {
        return <TimezonePicker onChange={action('onChange')} />
    })
    .add('with styles', () => {
        return (
            <TimezonePicker
                onChange={action('onChange')}
                style={{ border: '2px solid black' }}
            />
        )
    })
