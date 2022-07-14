import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxSharpFilled'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M2 22V8H6V2H14V6H8V14H10V8H22V22Z"/>
    </Icon>
  );
});

export default IconMaterialMarkunreadMailboxSharpFilled;
