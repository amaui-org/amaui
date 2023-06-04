import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100Filled'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.5 21.425-.475-.475 2.2-2.25H15.15V18h5.1L18 15.75l.5-.475 3.075 3.075ZM3.3 18.7V5.3h17.4v8.825q-.575-.275-1.037-.375-.463-.1-1.088-.1-2.05 0-3.487 1.437-1.438 1.438-1.438 3.488v.125Zm8.7-6.85 8-5.275L19.6 6 12 11 4.4 6l-.4.575Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100Filled.displayName = 'AmauiIconMaterialForwardToInboxW100Filled';

export default IconMaterialForwardToInboxW100Filled;
