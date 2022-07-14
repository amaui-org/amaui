import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpTwoTone'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>
    </Icon>
  );
});

export default IconMaterialKeyboardArrowUpTwoTone;
