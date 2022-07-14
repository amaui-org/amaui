import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowRightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowRightTwoTone'
      short_name='KeyboardArrowRight'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
    </Icon>
  );
});

export default IconMaterialKeyboardArrowRightTwoTone;
