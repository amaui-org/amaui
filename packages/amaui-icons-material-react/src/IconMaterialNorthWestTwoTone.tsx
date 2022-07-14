import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestTwoTone'
      short_name='NorthWest'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z"/>
    </Icon>
  );
});

export default IconMaterialNorthWestTwoTone;
