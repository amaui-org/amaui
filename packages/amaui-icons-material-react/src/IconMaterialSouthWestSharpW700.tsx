import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestSharpW700'
      short_name='SouthWest'

      {...props}
    >
      <path d="M4.425 19.575V8.425H7.575V14.225L18.6 3.2L20.8 5.4L9.775 16.425H15.575V19.575Z"/>
    </Icon>
  )
});

export default IconMaterialSouthWestSharpW700;
