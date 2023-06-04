import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreW100'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9.05h16V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8ZM3.3 6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v4.15H4v6.3q0 .35.225.55.225.2.575.2h4.5q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1H4.8q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2Zm11.25 12.3 5.475-5.475q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-5.425 5.425q-.225.225-.525.225-.3 0-.525-.225l-2.6-2.6q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125ZM4 6.8v10.45V14.4v1.875V6 6.8Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100.displayName = 'AmauiIconMaterialCreditScoreW100';

export default IconMaterialCreditScoreW100;
