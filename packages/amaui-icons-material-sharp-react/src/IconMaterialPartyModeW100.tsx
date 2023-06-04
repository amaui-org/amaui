import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPartyModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeW100'

      short_name='PartyMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.475 0 2.488-1.012Q15.5 14.475 15.5 13v-.25q0-.125-.05-.25h-.7q.05.125.05.25V13q0 1.175-.812 1.987-.813.813-1.988.813h-2q.275.275.812.488.538.212 1.188.212Zm-3.45-3h.7q-.05-.125-.05-.25V13q0-1.175.813-1.988.812-.812 1.987-.812h2q-.375-.3-.85-.5T12 9.5q-1.475 0-2.488 1.012Q8.5 11.525 8.5 13v.25q0 .125.05.25ZM3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4ZM4 19h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialPartyModeW100.displayName = 'AmauiIconMaterialPartyModeW100';

export default IconMaterialPartyModeW100;
