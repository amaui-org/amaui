import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyW100Filled'

      short_name='Money'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 15.35h2.95q.15 0 .25-.1T18 15V9q0-.15-.1-.25t-.25-.1H14.7q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1Zm.35-.7v-5.3h2.25v5.3Zm-6 .7H12q.15 0 .25-.1t.1-.25V9q0-.15-.1-.25t-.25-.1H9.05q-.15 0-.25.1T8.7 9v6q0 .15.1.25t.25.1Zm.35-.7v-5.3h2.25v5.3Zm-3.05.7q.15 0 .25-.1t.1-.25V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1T6 9v6q0 .15.1.25t.25.1ZM4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v10.4q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialMoneyW100Filled.displayName = 'AmauiIconMaterialMoneyW100Filled';

export default IconMaterialMoneyW100Filled;
