import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlinesRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesRounded'
      short_name='Airlines'

      {...props}
    >
      <path d="M5.8 18H17.35L19.6 6H14.05ZM2 20 12.05 5.375Q12.475 4.75 13.138 4.375Q13.8 4 14.55 4H19.6Q20.55 4 21.138 4.725Q21.725 5.45 21.55 6.375L19 20ZM14.5 14Q15.55 14 16.275 13.275Q17 12.55 17 11.5Q17 10.45 16.275 9.725Q15.55 9 14.5 9Q13.45 9 12.725 9.725Q12 10.45 12 11.5Q12 12.55 12.725 13.275Q13.45 14 14.5 14ZM5.8 18H17.35Z"/>
    </Icon>
  );
});

IconMaterialAirlinesRounded.displayName = 'AmauiIconMaterialAirlinesRounded';

export default IconMaterialAirlinesRounded;
