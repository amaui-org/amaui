import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPartyModeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartyModeSharpW100Filled'
      short_name='PartyMode'

      {...props}
    >
      <path d="M12 16.5Q13.475 16.5 14.488 15.488Q15.5 14.475 15.5 13Q15.5 12.875 15.5 12.75Q15.5 12.625 15.45 12.5H14.75Q14.8 12.625 14.8 12.75Q14.8 12.875 14.8 13Q14.8 14.175 13.988 14.987Q13.175 15.8 12 15.8H10Q10.275 16.075 10.812 16.288Q11.35 16.5 12 16.5ZM8.55 13.5H9.25Q9.2 13.375 9.2 13.25Q9.2 13.125 9.2 13Q9.2 11.825 10.013 11.012Q10.825 10.2 12 10.2H14Q13.625 9.9 13.15 9.7Q12.675 9.5 12 9.5Q10.525 9.5 9.512 10.512Q8.5 11.525 8.5 13Q8.5 13.125 8.5 13.25Q8.5 13.375 8.55 13.5ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialPartyModeSharpW100Filled.displayName = 'AmauiIconMaterialPartyModeSharpW100Filled';

export default IconMaterialPartyModeSharpW100Filled;
