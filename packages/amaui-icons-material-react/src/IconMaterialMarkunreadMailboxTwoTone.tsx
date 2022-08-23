import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxTwoTone'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M10 12H6V8H4v12h16V8H10z" opacity=".3"/><path d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxTwoTone.displayName = 'AmauiIconMaterialMarkunreadMailboxTwoTone';

export default IconMaterialMarkunreadMailboxTwoTone;
