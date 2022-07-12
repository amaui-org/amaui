import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatTwoTone'
      short_name='Repeat'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z"/>
    </Icon>
  )
});

export default IconMaterialRepeatTwoTone;
