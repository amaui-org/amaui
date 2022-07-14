import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpTwoTone'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/>
    </Icon>
  );
});

export default IconMaterialArrowDropUpTwoTone;
