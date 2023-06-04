import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectingAirportsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectingAirportsW100Filled'

      short_name='ConnectingAirports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.825 21-2.6-4.4H10q-.25 0-.425-.175T9.4 16q0-.25.175-.425T10 15.4h3.225l2.6-4.4h.35l-1.3 4.4h3.575l.75-1h.25l-.475 1.6.475 1.6h-.25l-.75-1h-3.575l1.3 4.4Zm-8-8 1.3-4.4H5.55l-.75 1h-.25L5.025 8 4.55 6.4h.25l.75 1h3.575L7.825 3h.35l2.6 4.4H14q.25 0 .425.175T14.6 8q0 .25-.175.425T14 8.6h-3.225l-2.6 4.4Z"/>
    </Icon>
  );
});

IconMaterialConnectingAirportsW100Filled.displayName = 'AmauiIconMaterialConnectingAirportsW100Filled';

export default IconMaterialConnectingAirportsW100Filled;
