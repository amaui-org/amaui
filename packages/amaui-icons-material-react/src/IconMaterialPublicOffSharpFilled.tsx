import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublicOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicOffSharpFilled'
      short_name='PublicOff'

      {...props}
    >
      <path d="M20.475 23.3 17.525 20.35Q16.325 21.15 14.938 21.575Q13.55 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.45 2.425 9.062Q2.85 7.675 3.65 6.475L0.675 3.5L2.1 2.075L21.9 21.875ZM11 19.95V18Q10.175 18 9.588 17.413Q9 16.825 9 16V15L4.2 10.2Q4.125 10.65 4.062 11.1Q4 11.55 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM20.35 17.475 18.9 16.025Q19.425 15.1 19.712 14.087Q20 13.075 20 12Q20 9.55 18.638 7.525Q17.275 5.5 15 4.6V5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V8.125L6.525 3.65Q7.725 2.875 9.1 2.438Q10.475 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.525 21.562 14.9Q21.125 16.275 20.35 17.475Z"/>
    </Icon>
  );
});

IconMaterialPublicOffSharpFilled.displayName = 'AmauiIconMaterialPublicOffSharpFilled';

export default IconMaterialPublicOffSharpFilled;
