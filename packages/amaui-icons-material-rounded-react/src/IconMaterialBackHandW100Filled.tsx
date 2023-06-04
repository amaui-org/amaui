import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100Filled'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22.1q-2.475 0-4.212-1.35Q7.05 19.4 6.225 16.9l-1.5-4.525q-.175-.525-.012-.875.162-.35.587-.35.675 0 1.15.662.475.663.75 1.388l.725 1.85q.025.05.275.2h.5V5.125q0-.45.288-.738.287-.287.737-.287t.738.287q.287.288.287.738v6.525q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V2.825q0-.45.288-.738.287-.287.737-.287t.738.287q.287.288.287.738v8.825q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-7.9q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75v7.9q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V6.5q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75V16q0 3.075-1.513 4.587Q16.075 22.1 13 22.1Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100Filled.displayName = 'AmauiIconMaterialBackHandW100Filled';

export default IconMaterialBackHandW100Filled;
