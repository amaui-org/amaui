import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardTwoTone'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </Icon>
  );
});

export default IconMaterialArrowUpwardTwoTone;
