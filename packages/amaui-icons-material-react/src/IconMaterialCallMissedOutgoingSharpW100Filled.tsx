import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingSharpW100Filled'
      short_name='CallMissedOutgoing'

      {...props}
    >
      <path d="M11.875 16.5 3.775 8.4 4.275 7.9 11.875 15.5 19.025 8.35H13.525V7.65H20.225V14.35H19.525V8.85Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingSharpW100Filled.displayName = 'AmauiIconMaterialCallMissedOutgoingSharpW100Filled';

export default IconMaterialCallMissedOutgoingSharpW100Filled;
