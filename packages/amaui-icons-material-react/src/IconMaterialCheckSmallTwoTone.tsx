import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallTwoTone'
      short_name='CheckSmall'

      {...props}
    >
      <path d="M10 17.125 5.525 12.65 7.65 10.5 10 12.85l6.35-6.35 2.15 2.15Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallTwoTone;
