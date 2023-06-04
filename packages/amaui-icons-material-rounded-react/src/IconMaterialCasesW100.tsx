import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesW100'

      short_name='Cases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 19.65q-.65 0-1.075-.425Q2.3 18.8 2.3 18.15V9.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.25q0 .35.225.575.225.225.575.225h13.9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.7-2.7q-.65 0-1.075-.425Q5 16.1 5 15.45v-7.4q0-.625.438-1.062.437-.438 1.062-.438h3.9V5.1q0-.65.425-1.075Q11.25 3.6 11.9 3.6h2.9q.65 0 1.075.425.425.425.425 1.075v1.45h3.9q.625 0 1.063.438.437.437.437 1.062v7.4q0 .65-.425 1.075-.425.425-1.075.425Zm4.6-10.4h4.5V5.1q0-.35-.225-.575Q15.15 4.3 14.8 4.3h-2.9q-.35 0-.575.225-.225.225-.225.575Zm-4.6 9.7h13.7q.35 0 .575-.225Q21 15.8 21 15.45v-7.4q0-.35-.225-.575-.225-.225-.575-.225H6.5q-.35 0-.575.225Q5.7 7.7 5.7 8.05v7.4q0 .35.225.575.225.225.575.225Zm-.8 0v-9 9Z"/>
    </Icon>
  );
});

IconMaterialCasesW100.displayName = 'AmauiIconMaterialCasesW100';

export default IconMaterialCasesW100;
