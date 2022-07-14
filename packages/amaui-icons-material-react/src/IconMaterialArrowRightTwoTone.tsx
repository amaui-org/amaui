import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightTwoTone'
      short_name='ArrowRight'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/>
    </Icon>
  );
});

export default IconMaterialArrowRightTwoTone;
