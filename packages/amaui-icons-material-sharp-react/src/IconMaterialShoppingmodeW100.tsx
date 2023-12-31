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
      <path d="M446-120 120-446l382-382h326v326L446-120Zm253.882-546Q714-666 724-675.882q10-9.883 10-24Q734-714 724.118-724q-9.883-10-24-10Q686-734 676-724.118q-10 9.883-10 24Q666-686 675.882-676q9.883 10 24 10ZM446.448-160 800-514v-286H513.552L160-446l286.448 286ZM800-800Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeW100.displayName = 'AmauiIconMaterialShoppingmodeW100';

export default IconMaterialShoppingmodeW100;
