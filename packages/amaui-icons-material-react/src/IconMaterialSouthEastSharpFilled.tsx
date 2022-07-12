import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastSharpFilled'
      short_name='SouthEast'

      {...props}
    >
      <path d="M9 19V17H15.6L4 5.4L5.4 4L17 15.6V9H19V19Z"/>
    </Icon>
  )
});

export default IconMaterialSouthEastSharpFilled;
