import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveTwoTone'
      short_name='Remove'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/>
    </Icon>
  )
});

export default IconMaterialRemoveTwoTone;
