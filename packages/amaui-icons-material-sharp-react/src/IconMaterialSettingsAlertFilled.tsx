import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertFilled'

      short_name='SettingsAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm-1-3h2V8h-2Zm-1.75 9-.4-3.2q-.325-.125-.612-.3-.288-.175-.563-.375L4.7 19.375l-2.75-4.75 2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75 2.975 1.25q.275-.2.575-.375.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.175.562.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375-.3.175-.6.3l-.4 3.2Z"/>
    </Icon>
  );
});

IconMaterialSettingsAlertFilled.displayName = 'AmauiIconMaterialSettingsAlertFilled';

export default IconMaterialSettingsAlertFilled;
