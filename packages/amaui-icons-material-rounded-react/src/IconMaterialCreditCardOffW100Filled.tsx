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
      <path d="M20.575 17.775 13.75 10.95H20v-1.9h-8.15L8.1 5.3h11.1q.65 0 1.075.425.425.425.425 1.075v10.4q0 .15-.037.3-.038.15-.088.275ZM4 10.95h5.95l-1.9-1.9H4Zm17.05 11.1L17.7 18.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h.5L6 6H5L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100Filled.displayName = 'AmauiIconMaterialCreditCardOffW100Filled';

export default IconMaterialCreditCardOffW100Filled;
