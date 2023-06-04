import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxFilled'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V8h4V2h8v4H8v8h2V8h12v14Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxFilled.displayName = 'AmauiIconMaterialMarkunreadMailboxFilled';

export default IconMaterialMarkunreadMailboxFilled;
