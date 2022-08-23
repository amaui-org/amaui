import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoupeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeSharpFilled'
      short_name='Loupe'

      {...props}
    >
      <path d="M11 17H13V13H17V11H13V7H11V11H7V13H11ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12V22Z"/>
    </Icon>
  );
});

IconMaterialLoupeSharpFilled.displayName = 'AmauiIconMaterialLoupeSharpFilled';

export default IconMaterialLoupeSharpFilled;
