import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireplaceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceSharpFilled'
      short_name='Fireplace'

      {...props}
    >
      <path d="M10.6 16.95Q11.575 17.75 12.713 17.337Q13.85 16.925 14 15.65Q14.125 14.475 13.275 13.912Q12.425 13.35 12 12.45Q11.875 12.8 11.875 13.1Q11.875 13.4 11.95 13.75Q12.025 14.175 12.125 14.55Q12.225 14.925 12.15 15.35Q12.025 15.8 11.6 16.275Q11.175 16.75 10.6 16.95ZM2 22V2H22V22ZM4 20H6V18H8.25Q7.675 17.275 7.338 16.475Q7 15.675 7 14.95Q7 13.8 7.25 12.787Q7.5 11.775 8.163 10.825Q8.825 9.875 10 8.938Q11.175 8 13 7Q12.725 8.1 13.238 9.337Q13.75 10.575 15.15 11.6Q15.975 12.2 16.488 13.012Q17 13.825 17 15Q17 15.875 16.725 16.613Q16.45 17.35 16 18H18V20H20V4H4Z"/>
    </Icon>
  );
});

IconMaterialFireplaceSharpFilled.displayName = 'AmauiIconMaterialFireplaceSharpFilled';

export default IconMaterialFireplaceSharpFilled;
