import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInbox'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13 4 8v10h9v2H2V4h20v9h-2V8Zm0-2 8-5H4Zm7 12-1.4-1.4 1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4ZM4 8v11-6 .075V6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInbox.displayName = 'AmauiIconMaterialForwardToInbox';

export default IconMaterialForwardToInbox;
