import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScienceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceRoundedW100Filled'
      short_name='Science'

      {...props}
    >
      <path d="M5 19.7Q4.575 19.7 4.375 19.3Q4.175 18.9 4.45 18.55L10.3 11.45V5H8.8Q8.65 5 8.55 4.9Q8.45 4.8 8.45 4.65Q8.45 4.5 8.55 4.4Q8.65 4.3 8.8 4.3H15.2Q15.35 4.3 15.45 4.4Q15.55 4.5 15.55 4.65Q15.55 4.8 15.45 4.9Q15.35 5 15.2 5H13.7V11.45L19.55 18.55Q19.825 18.875 19.625 19.288Q19.425 19.7 19 19.7Z"/>
    </Icon>
  );
});

IconMaterialScienceRoundedW100Filled.displayName = 'AmauiIconMaterialScienceRoundedW100Filled';

export default IconMaterialScienceRoundedW100Filled;
