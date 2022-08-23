import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlinesRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesRoundedW100'
      short_name='Airlines'

      {...props}
    >
      <path d="M5.35 18H16.9L19.15 6H13.6ZM4.025 18.7 12.9 5.775Q13.05 5.55 13.312 5.425Q13.575 5.3 13.85 5.3H19.125Q19.475 5.3 19.675 5.55Q19.875 5.8 19.825 6.125L17.475 18.7ZM14.05 13.075Q14.7 13.075 15.163 12.612Q15.625 12.15 15.625 11.5Q15.625 10.85 15.163 10.387Q14.7 9.925 14.05 9.925Q13.4 9.925 12.938 10.387Q12.475 10.85 12.475 11.5Q12.475 12.15 12.938 12.612Q13.4 13.075 14.05 13.075ZM5.35 18H16.9Z"/>
    </Icon>
  );
});

IconMaterialAirlinesRoundedW100.displayName = 'AmauiIconMaterialAirlinesRoundedW100';

export default IconMaterialAirlinesRoundedW100;
