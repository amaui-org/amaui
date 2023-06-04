import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoodBankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoodBankW100'

      short_name='FoodBank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 19.7q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.95q.4-.3.9-.3t.9.3l5.2 3.95q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438ZM6 19h12v-9l-6-4.55L6 10Zm4.4-5.05v2.8q0 .175.112.288.113.112.288.112t.288-.112q.112-.113.112-.288v-2.8q.5 0 .85-.35t.35-.85v-2q0-.175-.112-.288-.113-.112-.288-.112t-.287.112q-.113.113-.113.288v2h-.4v-2q0-.175-.112-.288-.113-.112-.288-.112t-.288.112q-.112.113-.112.288v2H10v-2q0-.175-.113-.288-.112-.112-.287-.112t-.288.112q-.112.113-.112.288v2q0 .5.35.85t.85.35Zm3.6 3.2q.175 0 .288-.112.112-.113.112-.288v-6q0-.15-.1-.25t-.225-.1q-.575 0-.925.462-.35.463-.35 1.088v2q0 .175.113.288.112.112.287.112h.4v2.4q0 .175.113.288.112.112.287.112ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialFoodBankW100.displayName = 'AmauiIconMaterialFoodBankW100';

export default IconMaterialFoodBankW100;
