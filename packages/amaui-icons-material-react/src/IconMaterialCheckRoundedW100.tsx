import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckRoundedW100'
      short_name='Check'

      {...props}
    >
      <path d="M9.55 16.8Q9.4 16.8 9.275 16.75Q9.15 16.7 9.025 16.575L5.05 12.6Q4.925 12.475 4.925 12.35Q4.925 12.225 5.05 12.1Q5.175 11.975 5.3 11.975Q5.425 11.975 5.55 12.1L9.55 16.1L18.45 7.2Q18.575 7.075 18.7 7.075Q18.825 7.075 18.95 7.2Q19.075 7.325 19.075 7.45Q19.075 7.575 18.95 7.7L10.075 16.575Q9.95 16.7 9.825 16.75Q9.7 16.8 9.55 16.8Z"/>
    </Icon>
  );
});

IconMaterialCheckRoundedW100.displayName = 'AmauiIconMaterialCheckRoundedW100';

export default IconMaterialCheckRoundedW100;
