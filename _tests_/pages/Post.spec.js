

import { render } from '@testing-library/react-native'
import { Posts } from '../../src/screens/Posts'

describe('Testing the post page', () => {

    it('renders the component correctly', () => {
        render(<Posts />)

    })

})