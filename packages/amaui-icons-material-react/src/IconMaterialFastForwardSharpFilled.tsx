import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastForwardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardSharpFilled'
      short_name='FastForward'

      {...props}
    >
      <path d="M2.5 18V6L11.5 12ZM12.5 18V6L21.5 12Z"/>
    </Icon>
  )
});

export default IconMaterialFastForwardSharpFilled;
