import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExclamationOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationOutlinedW700'
      short_name='Exclamation'

      {...props}
    >
      <path d="M10.425 14.375V4.225H13.575V14.375ZM10.425 19.775V16.625H13.575V19.775Z"/>
    </Icon>
  )
});

export default IconMaterialExclamationOutlinedW700;
