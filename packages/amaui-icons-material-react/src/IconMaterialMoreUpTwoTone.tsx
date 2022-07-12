import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpTwoTone'
      short_name='MoreUp'

      {...props}
    >
      <path d="M16.875 16.125v-9h-9V4.1H19.9v12.025ZM11.5 21.5v-9h-9V9.475h12.025V21.5Z"/>
    </Icon>
  )
});

export default IconMaterialMoreUpTwoTone;
