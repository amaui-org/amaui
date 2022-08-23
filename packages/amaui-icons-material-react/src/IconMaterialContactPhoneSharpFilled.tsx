import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPhoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneSharpFilled'
      short_name='ContactPhone'

      {...props}
    >
      <path d="M0 21V3H24V21ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM19 18 21 16 19.5 14H17.85Q17.7 13.55 17.6 13.037Q17.5 12.525 17.5 12Q17.5 11.475 17.6 10.988Q17.7 10.5 17.85 10H19.5L21 8L19 6Q17.65 7.05 16.825 8.662Q16 10.275 16 12Q16 13.725 16.825 15.337Q17.65 16.95 19 18ZM2.1 19H15.9Q14.85 17.125 13 16.062Q11.15 15 9 15Q6.85 15 5 16.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneSharpFilled.displayName = 'AmauiIconMaterialContactPhoneSharpFilled';

export default IconMaterialContactPhoneSharpFilled;
