import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharpFilled'
      short_name='Tab'

      {...props}
    >
      <path d="M2 20V4H22V20ZM13 10H20V6H13Z"/>
    </Icon>
  )
});

export default IconMaterialTabSharpFilled;
