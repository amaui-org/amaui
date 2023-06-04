import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoDrinksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksW100Filled'

      short_name='NoDrinks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.65 3.65 16.7 16.7-.5.5-7.5-7.5v6.3h4.35v.7H7.3v-.7h4.35v-6.9l-.8-.9-7.7-7.7Zm3.45.65h12.15V5l-5.4 6.05L9.8 7h6.75l1.8-2H7.8Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksW100Filled.displayName = 'AmauiIconMaterialNoDrinksW100Filled';

export default IconMaterialNoDrinksW100Filled;
