import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPartyModeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeRoundedFilled'
      short_name='PartyMode'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 12.875 16.488 12.75Q16.475 12.625 16.45 12.5H14.45Q14.5 12.625 14.5 12.75Q14.5 12.875 14.5 13Q14.5 14.05 13.775 14.775Q13.05 15.5 12 15.5H8.25Q8.85 16.4 9.838 16.95Q10.825 17.5 12 17.5ZM7.55 13.5H9.55Q9.5 13.375 9.5 13.25Q9.5 13.125 9.5 13Q9.5 11.95 10.225 11.225Q10.95 10.5 12 10.5H15.75Q15.15 9.6 14.163 9.05Q13.175 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 13.125 7.513 13.25Q7.525 13.375 7.55 13.5ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialPartyModeRoundedFilled.displayName = 'AmauiIconMaterialPartyModeRoundedFilled';

export default IconMaterialPartyModeRoundedFilled;
