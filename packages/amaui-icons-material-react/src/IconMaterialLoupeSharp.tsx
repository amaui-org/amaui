import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoupeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeSharp'
      short_name='Loupe'

      {...props}
    >
      <path d="M11 17H13V13H17V11H13V7H11V11H7V13H11ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12V22ZM12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialLoupeSharp.displayName = 'AmauiIconMaterialLoupeSharp';

export default IconMaterialLoupeSharp;
