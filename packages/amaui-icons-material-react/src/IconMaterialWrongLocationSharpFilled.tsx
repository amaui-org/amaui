import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrongLocationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationSharpFilled'
      short_name='WrongLocation'

      {...props}
    >
      <path d="M16.875 8.05 15.475 6.65 17.575 4.55 15.475 2.45 16.875 1.05 18.975 3.15 21.075 1.05 22.475 2.45 20.375 4.55 22.475 6.65 21.075 8.05 18.975 5.95ZM12 22Q11.65 22 11.4 21.8Q11.15 21.6 11.025 21.275Q10.55 19.875 9.838 18.65Q9.125 17.425 7.85 15.775Q6.575 14.125 5.787 12.625Q5 11.125 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q12.475 2 12.913 2.062Q13.35 2.125 13.85 2.25L16.15 4.55L14.05 6.65L16.875 9.475L19 7.375V9Q19 11.275 18.138 12.787Q17.275 14.3 16.15 15.775Q14.8 17.575 14.113 18.762Q13.425 19.95 12.975 21.275Q12.85 21.625 12.588 21.812Q12.325 22 12 22ZM12 11.5Q13.05 11.5 13.775 10.775Q14.5 10.05 14.5 9Q14.5 7.95 13.775 7.225Q13.05 6.5 12 6.5Q10.95 6.5 10.225 7.225Q9.5 7.95 9.5 9Q9.5 10.05 10.225 10.775Q10.95 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationSharpFilled.displayName = 'AmauiIconMaterialWrongLocationSharpFilled';

export default IconMaterialWrongLocationSharpFilled;
