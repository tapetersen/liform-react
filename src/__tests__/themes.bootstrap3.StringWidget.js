import expect from 'expect'
import React from 'react'
import Liform from '../'
import { FormFrame } from './test-utils'
import { shallow, mount, render } from 'enzyme'

describe('StringWidget', () => {
    it('should render a form with a type text widget', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'string',
                },
            }
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)

        expect(wrapper.find('input[type=text]').length).toEqual(1);

    })
    it('required gives the input the required attribute', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'field': {
                    'type': 'string',
                },
            },
            required: ['field']
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)

        expect(wrapper.find('input[required]').length).toEqual(1);

    })
})
