import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHikingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingSharpW100Filled'
      short_name='Hiking'

      {...props}
    >
      <path d="M13 5.1Q12.35 5.1 11.875 4.625Q11.4 4.15 11.4 3.5Q11.4 2.85 11.875 2.375Q12.35 1.9 13 1.9Q13.65 1.9 14.125 2.375Q14.6 2.85 14.6 3.5Q14.6 4.15 14.125 4.625Q13.65 5.1 13 5.1ZM7.3 22.35 10.2 7.325Q10.275 6.9 10.625 6.65Q10.975 6.4 11.35 6.4Q11.75 6.4 12.1 6.575Q12.45 6.75 12.65 7.1L13.65 8.7Q14.15 9.5 15.175 10.238Q16.2 10.975 17.65 11.4V9.4H18.35V22.35H17.65V12.075Q16.3 11.8 15.013 10.987Q13.725 10.175 12.625 8.825L11.7 13.475L13.85 15.525V22.35H13.15V16.475L9.9 14.075L8.075 22.35ZM7.175 12.35 8.275 6.775 6.45 6.325 5.35 12Z"/>
    </Icon>
  );
});

IconMaterialHikingSharpW100Filled.displayName = 'AmauiIconMaterialHikingSharpW100Filled';

export default IconMaterialHikingSharpW100Filled;
