'use strict';

import React from 'react';
import {render} from 'react-dom';
import Hello from './components/main_component.jsx';
import '../sass/colors.scss';

render(<Hello/>, document.getElementById('app'));