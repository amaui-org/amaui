import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPartyModeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeSharp'
      short_name='PartyMode'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 12.875 16.488 12.75Q16.475 12.625 16.45 12.5H14.45Q14.5 12.625 14.5 12.75Q14.5 12.875 14.5 13Q14.5 14.05 13.775 14.775Q13.05 15.5 12 15.5H8.25Q8.85 16.4 9.838 16.95Q10.825 17.5 12 17.5ZM7.55 13.5H9.55Q9.5 13.375 9.5 13.25Q9.5 13.125 9.5 13Q9.5 11.95 10.225 11.225Q10.95 10.5 12 10.5H15.75Q15.15 9.6 14.163 9.05Q13.175 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 13.125 7.513 13.25Q7.525 13.375 7.55 13.5ZM2 21V5H7.15L9 3H15L16.85 5H22V21ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialPartyModeSharp.displayName = 'AmauiIconMaterialPartyModeSharp';

export default IconMaterialPartyModeSharp;
