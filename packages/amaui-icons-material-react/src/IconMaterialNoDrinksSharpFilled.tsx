import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksSharpFilled'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M6 21V19H11V14L9.8 12.65L1.4 4.225L2.8 2.8L21.2 21.2L19.775 22.625L13 15.85V19H18V21ZM14.8 11.95 9.85 7H16.55L18.35 5H7.85L5.85 3H21V5Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksSharpFilled.displayName = 'AmauiIconMaterialNoDrinksSharpFilled';

export default IconMaterialNoDrinksSharpFilled;
