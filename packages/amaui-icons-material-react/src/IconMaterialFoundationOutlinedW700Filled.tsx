import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoundationOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationOutlinedW700Filled'
      short_name='Foundation'

      {...props}
    >
      <path d="M4.625 20.375V17.575H2.425V14.425H4.625V12.375H1L12 2.5L23 12.375H19.375V14.425H21.575V17.575H19.375V20.375H16.225V17.575H13.575V20.375H10.425V17.575H7.775V20.375ZM7.775 14.425H10.425V8.15L7.775 10.55ZM13.575 14.425H16.225V10.55L13.575 8.15Z"/>
    </Icon>
  )
});

export default IconMaterialFoundationOutlinedW700Filled;
