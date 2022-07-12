import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltTwoTone'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightAltTwoTone;
