import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthEastTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastTwoTone'
      short_name='NorthEast'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"/>
    </Icon>
  )
});

export default IconMaterialNorthEastTwoTone;
