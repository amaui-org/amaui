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
      <path d="M12 16.5q1.475 0 2.488-1.012Q15.5 14.475 15.5 13v-.25q0-.125-.05-.25h-.7q.05.125.05.25V13q0 1.175-.812 1.987-.813.813-1.988.813h-2q.275.275.812.488.538.212 1.188.212Zm-3.45-3h.7q-.05-.125-.05-.25V13q0-1.175.813-1.988.812-.812 1.987-.812h2q-.375-.3-.85-.5T12 9.5q-1.475 0-2.488 1.012Q8.5 11.525 8.5 13v.25q0 .125.05.25ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm14.4-.7q.35 0 .575-.225Q20 18.55 20 18.2V7.8q0-.35-.225-.575Q19.55 7 19.2 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v10.4q0 .35.225.575Q4.45 19 4.8 19ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialPartyModeW100.displayName = 'AmauiIconMaterialPartyModeW100';

export default IconMaterialPartyModeW100;
