import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindSharpFilled'
      short_name='FastRewind'

      {...props}
    >
      <path d="M21.5 18 12.5 12 21.5 6ZM11.5 18 2.5 12 11.5 6Z"/>
    </Icon>
  )
});

export default IconMaterialFastRewindSharpFilled;
