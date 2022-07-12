import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxSharp'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M6 14V10H4V20H20V10H10V8H22V22H2V8H6V2H14V6H8V14ZM4 14V10V20V10V14Z"/>
    </Icon>
  )
});

export default IconMaterialMarkunreadMailboxSharp;
