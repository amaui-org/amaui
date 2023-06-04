import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffW100'

      short_name='CreditCardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 5.3v12.6l-.7-.7v-6.25h-6.25l-1.9-1.9H20V6H8.8l-.7-.7Zm-6.3 6.3ZM11 12Zm-1.05-1.05H4V18h13ZM21.3 22.3l-3.6-3.6H3.3V5.3h2L6 6H4v3.05h4.05l-5.8-5.8.5-.5L21.8 21.8Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100.displayName = 'AmauiIconMaterialCreditCardOffW100';

export default IconMaterialCreditCardOffW100;
