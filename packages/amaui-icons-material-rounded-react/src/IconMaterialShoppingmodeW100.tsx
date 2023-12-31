import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingmodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeW100'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-140q-8 8-20 8t-20-8L140-426q-8-8-7.5-20.5T142-468l352-352q4.024-3.667 9.512-5.833Q509-828 514-828h286q11 0 19.5 8.5T828-800v286q0 6.149-2.5 11.574Q823-497 818-492L466-140Zm233.882-526Q714-666 724-675.882q10-9.883 10-24Q734-714 724.118-724q-9.883-10-24-10Q686-734 676-724.118q-10 9.883-10 24Q666-686 675.882-676q9.883 10 24 10ZM446.448-160 800-514v-286H513.552L160-446l286.448 286ZM800-800Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeW100.displayName = 'AmauiIconMaterialShoppingmodeW100';

export default IconMaterialShoppingmodeW100;
