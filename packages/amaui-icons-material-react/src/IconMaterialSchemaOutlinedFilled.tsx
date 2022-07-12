import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaOutlinedFilled'
      short_name='Schema'

      {...props}
    >
      <path d="M4 23V17H6.5V15H4V9H6.5V7H4V1H11V7H8.5V9H11V11H14V9H21V15H14V13H11V15H8.5V17H11V23Z"/>
    </Icon>
  )
});

export default IconMaterialSchemaOutlinedFilled;
