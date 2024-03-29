import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Airware'

      short_name='Airware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 8.65 3.375 7.225 5.25 5.35q.625-.625 1.513-.988Q7.65 4 8.525 4q.825 0 1.638.3.812.3 1.562 1.05L13.6 7.225q.375.375.875.575.5.2 1 .2t.987-.2q.488-.2.863-.575L19.2 5.35l1.425 1.425L18.75 8.65q-.675.675-1.525 1.012-.85.338-1.75.338-.875 0-1.737-.338-.863-.337-1.538-1.012l-1.875-1.875q-.4-.4-.85-.587Q9.025 6 8.525 6q-.5 0-1 .213-.5.212-.85.562Zm0 5-1.425-1.425L5.25 10.35q.625-.625 1.513-.987Q7.65 9 8.525 9t1.663.3q.787.3 1.537 1.05l1.875 1.875q.375.375.875.575.5.2 1 .2t.987-.2q.488-.2.863-.575L19.2 10.35l1.425 1.4-1.875 1.9q-.675.675-1.525 1.012-.85.338-1.75.338-.875 0-1.737-.338-.863-.337-1.538-1.012l-1.875-1.9q-.4-.4-.862-.575Q9 11 8.525 11q-.5 0-1 .2t-.85.55Zm0 5-1.425-1.425L5.25 15.35q.625-.625 1.513-.987Q7.65 14 8.525 14q.825 0 1.638.3.812.3 1.562 1.05l1.875 1.875q.375.375.875.575.5.2 1 .2t.987-.2q.488-.2.863-.575L19.2 15.35l1.425 1.4-1.875 1.9q-.675.675-1.525 1.013-.85.337-1.75.337-.875 0-1.737-.337-.863-.338-1.538-1.013l-1.875-1.9q-.4-.4-.862-.575Q9 16 8.525 16q-.5 0-1 .2t-.85.55Z"/>
    </Icon>
  );
});

IconMaterialAirware.displayName = 'AmauiIconMaterialAirware';

export default IconMaterialAirware;
