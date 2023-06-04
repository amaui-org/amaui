import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailbox'

      short_name='MarkunreadMailbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14v-4H4v10h16V10H10V8h12v14H2V8h4V2h8v4H8v8Zm-2 0v-4 10-10 4Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailbox.displayName = 'AmauiIconMaterialMarkunreadMailbox';

export default IconMaterialMarkunreadMailbox;
