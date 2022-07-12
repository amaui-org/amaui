import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestTwoTone'
      short_name='SouthWest'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z"/>
    </Icon>
  )
});

export default IconMaterialSouthWestTwoTone;
