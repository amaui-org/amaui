import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksSharpW700'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M5.425 21.575V18.425H10.425V14.625L3.75 6.7L0.325 3.275L2 1.6L22.4 22L20.725 23.675L13.575 16.55V18.425H18.3V21.575ZM15.825 12.075 10.725 7H16.125L17.65 5.3H9.05L5.9 2.15H21.85V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialNoDrinksSharpW700;
