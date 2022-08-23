import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreSharpW100'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4 9.05H20V6H4ZM3.3 18.7V5.3H20.7V10.95H4V18H9.625V18.7ZM14.55 20.1 11.2 16.75 11.7 16.25 14.55 19.1 20.25 13.4 20.75 13.9ZM4 6V18V16.75V13.425V16.275V10.95V9.05V6Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreSharpW100.displayName = 'AmauiIconMaterialCreditScoreSharpW100';

export default IconMaterialCreditScoreSharpW100;
