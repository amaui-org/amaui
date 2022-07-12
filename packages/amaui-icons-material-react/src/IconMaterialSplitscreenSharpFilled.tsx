import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharpFilled'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M4 11V2H20V11ZM4 22V13H20V22Z"/>
    </Icon>
  )
});

export default IconMaterialSplitscreenSharpFilled;
