import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosTwoTone'
      short_name='ArrowForwardIos'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
    </Icon>
  )
});

export default IconMaterialArrowForwardIosTwoTone;
