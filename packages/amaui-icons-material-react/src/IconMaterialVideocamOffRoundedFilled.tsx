import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffRoundedFilled'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M19.875 22.65 16.975 19.75Q16.75 19.875 16.525 19.938Q16.3 20 16.025 20H4.025Q3.2 20 2.612 19.413Q2.025 18.825 2.025 18V6Q2.025 5.725 2.087 5.5Q2.15 5.275 2.275 5.05L1.35 4.125Q1.075 3.85 1.075 3.45Q1.075 3.05 1.375 2.75Q1.65 2.475 2.075 2.475Q2.5 2.475 2.775 2.75L21.3 21.275Q21.575 21.55 21.575 21.95Q21.575 22.35 21.275 22.65Q21 22.925 20.575 22.925Q20.15 22.925 19.875 22.65ZM18.025 15.175 6.85 4H16.025Q16.85 4 17.438 4.588Q18.025 5.175 18.025 6V10.5L21.175 7.35Q21.4 7.125 21.713 7.237Q22.025 7.35 22.025 7.7V16.3Q22.025 16.65 21.713 16.762Q21.4 16.875 21.175 16.65L18.025 13.5Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffRoundedFilled.displayName = 'AmauiIconMaterialVideocamOffRoundedFilled';

export default IconMaterialVideocamOffRoundedFilled;
