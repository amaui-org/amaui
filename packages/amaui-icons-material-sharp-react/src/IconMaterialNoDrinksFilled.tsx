import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoDrinksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksFilled'

      short_name='NoDrinks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.8 2.8 18.4 18.4-1.425 1.425L13 15.85V19h5v2H6v-2h5v-5l-1.2-1.35-8.4-8.425Zm3.05.2H21v2l-6.2 6.95L9.85 7h6.7l1.8-2H7.85Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksFilled.displayName = 'AmauiIconMaterialNoDrinksFilled';

export default IconMaterialNoDrinksFilled;
