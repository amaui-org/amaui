import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoodBankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankW100Filled'

      short_name='FoodBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575l6.7 5.075V19.7Zm5.1-2.55h.8v-3.2q.5 0 .85-.35t.35-.85v-2.4h-.8v2.4h-.4v-2.4h-.8v2.4H10v-2.4h-.8v2.4q0 .5.35.85t.85.35Zm3.2 0h.8v-6.8q-.65 0-1.125.475T12.8 11.95v2.4h.8Z"/>
    </Icon>
  );
});

IconMaterialFoodBankW100Filled.displayName = 'AmauiIconMaterialFoodBankW100Filled';

export default IconMaterialFoodBankW100Filled;
