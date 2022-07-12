import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomTwoTone'
      short_name='VerticalAlignBottom'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z"/>
    </Icon>
  )
});

export default IconMaterialVerticalAlignBottomTwoTone;
