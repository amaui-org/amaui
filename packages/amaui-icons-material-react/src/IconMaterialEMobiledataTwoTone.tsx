import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataTwoTone'
      short_name='EMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z"/></g></g>
    </Icon>
  )
});

export default IconMaterialEMobiledataTwoTone;
