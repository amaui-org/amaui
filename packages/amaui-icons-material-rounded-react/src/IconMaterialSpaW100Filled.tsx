import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaW100Filled'

      short_name='Spa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.425 19.9q.025.3-.187.5-.213.2-.513.15-3.325-.55-5.4-2.925T3.9 11.675q-.05-.3.162-.487.213-.188.513-.138 3.4.55 5.525 2.725 2.125 2.175 2.325 6.125ZM11.55 5.55q.175-.25.45-.25t.45.25q.95 1.425 1.575 3.312.625 1.888.625 3.388-.8.45-1.562 1.4-.763.95-1.088 1.65-.45-.85-1.137-1.713-.688-.862-1.513-1.387 0-1.5.625-3.363.625-1.862 1.575-3.287Zm7.9 5.5q.3-.05.512.138.213.187.163.487-.325 3.3-2.025 5.45-1.7 2.15-4.9 3.275-.05-1.125-.275-2.237-.225-1.113-.575-1.963.725-1.875 2.563-3.3 1.837-1.425 4.537-1.85Z"/>
    </Icon>
  );
});

IconMaterialSpaW100Filled.displayName = 'AmauiIconMaterialSpaW100Filled';

export default IconMaterialSpaW100Filled;
