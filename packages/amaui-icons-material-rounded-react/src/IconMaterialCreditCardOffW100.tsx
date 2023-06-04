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
      <path d="M20.575 17.775 20 17.2v-6.25h-6.25l-1.9-1.9H20V6.8q0-.35-.225-.575Q19.55 6 19.2 6H8.8l-.7-.7h11.1q.65 0 1.075.425.425.425.425 1.075v10.4q0 .15-.037.3-.038.15-.088.275ZM14.4 11.6ZM11 12Zm-1.05-1.05H4v6.25q0 .3.25.55.25.25.55.25H17Zm11.1 11.1L17.7 18.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h.5L6 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v2.25h4.05L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCreditCardOffW100.displayName = 'AmauiIconMaterialCreditCardOffW100';

export default IconMaterialCreditCardOffW100;
