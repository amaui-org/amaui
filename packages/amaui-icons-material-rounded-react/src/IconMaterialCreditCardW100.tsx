import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardW100'

      short_name='CreditCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 6.8v10.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075ZM4 9.05h16V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8Zm0 1.9v6.25q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55v-6.25ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialCreditCardW100.displayName = 'AmauiIconMaterialCreditCardW100';

export default IconMaterialCreditCardW100;
