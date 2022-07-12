import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardSharpFilled'
      short_name='SdCard'

      {...props}
    >
      <path d="M9 11H11V7H9ZM12 11H14V7H12ZM15 11H17V7H15ZM4 22V8L10 2H20V22Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardSharpFilled;
