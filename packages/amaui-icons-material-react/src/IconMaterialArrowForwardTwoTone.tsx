import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardTwoTone'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
    </Icon>
  )
});

export default IconMaterialArrowForwardTwoTone;
