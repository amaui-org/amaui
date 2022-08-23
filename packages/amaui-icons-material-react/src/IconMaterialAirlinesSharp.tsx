import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlinesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesSharp'
      short_name='Airlines'

      {...props}
    >
      <path d="M5.8 18H17.35L19.6 6H14.05ZM2 20 13 4H22L19 20ZM14.5 14Q15.55 14 16.275 13.275Q17 12.55 17 11.5Q17 10.45 16.275 9.725Q15.55 9 14.5 9Q13.45 9 12.725 9.725Q12 10.45 12 11.5Q12 12.55 12.725 13.275Q13.45 14 14.5 14ZM5.8 18H17.35Z"/>
    </Icon>
  );
});

IconMaterialAirlinesSharp.displayName = 'AmauiIconMaterialAirlinesSharp';

export default IconMaterialAirlinesSharp;
