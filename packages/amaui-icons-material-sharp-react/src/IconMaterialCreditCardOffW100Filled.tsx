import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardOffW100Filled'

      short_name='CreditCardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.9-6.95-6.95H20v-1.9h-8.15L8.1 5.3h12.6ZM4 10.95h5.95l-1.9-1.9H4ZM21.3 22.3l-3.6-3.6H3.3V5.3h2L6 6H5L2.25 3.25l.5-.5L21.8 21.8Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100Filled.displayName = 'AmauiIconMaterialCreditCardOffW100Filled';

export default IconMaterialCreditCardOffW100Filled;
