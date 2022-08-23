import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolAltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltRoundedW100Filled'
      short_name='PanToolAlt'

      {...props}
    >
      <path d="M10.475 19.7Q10.325 19.7 10.188 19.637Q10.05 19.575 9.925 19.45L6.125 15.7Q5.95 15.525 5.938 15.287Q5.925 15.05 6.05 14.825Q6.15 14.65 6.363 14.588Q6.575 14.525 6.775 14.575L10.225 15.25V5.5Q10.225 5 10.575 4.65Q10.925 4.3 11.425 4.3Q11.925 4.3 12.275 4.65Q12.625 5 12.625 5.5V10.8H13.675Q13.775 10.8 13.863 10.825Q13.95 10.85 14.025 10.9L17.075 12.4Q17.8 12.75 18.113 13.537Q18.425 14.325 18.275 15.15L17.575 19.15Q17.525 19.4 17.338 19.55Q17.15 19.7 16.875 19.7Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltRoundedW100Filled.displayName = 'AmauiIconMaterialPanToolAltRoundedW100Filled';

export default IconMaterialPanToolAltRoundedW100Filled;
