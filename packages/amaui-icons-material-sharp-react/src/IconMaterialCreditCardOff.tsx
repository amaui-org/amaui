import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOff'

      short_name='CreditCardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 4v15.15l-2-2V12h-5.15l-4-4H20V6H8.85l-2-2Zm-7.575 7.575Zm-4.8.875ZM9.15 12H4v6h11.15Zm11.3 11.3-3.3-3.3H2V4h2l2 2H4v2h1.15L.65 3.5l1.425-1.425 19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOff.displayName = 'AmauiIconMaterialCreditCardOff';

export default IconMaterialCreditCardOff;
