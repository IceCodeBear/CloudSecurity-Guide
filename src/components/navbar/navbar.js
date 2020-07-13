import React from "react";
import {
    Container,
    Dropdown,
    Menu
} from 'semantic-ui-react'

const navbar = () => (
    <div>
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <span aria-label="bear" role="img" style={{ marginRight: '1.5em' }}>&#x2601;</span>
                Cloud Security Guide
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Getting Started'>
                <Dropdown.Menu>
                    <Dropdown.Item>Cloud Security 101</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown item simple text='AWS'>
                <Dropdown.Menu>
                    <Dropdown.Item>AWS</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item simple text='Azure'>
                <Dropdown.Menu>
                    <Dropdown.Item>Azure</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item simple text='GCP'>
                <Dropdown.Menu>
                    <Dropdown.Item>GCP</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Container>
        </Menu>
    </div>
)

export default navbar