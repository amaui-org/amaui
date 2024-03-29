import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxFilled'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 23-1.4-1.4 1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4ZM2 20V4h20v9.8q-.675-.4-1.438-.6Q19.8 13 19 13q-2.5 0-4.25 1.75T13 19v1Zm10-7 8-5V6l-8 5-8-5v2Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxFilled.displayName = 'AmauiIconMaterialForwardToInboxFilled';

export default IconMaterialForwardToInboxFilled;
