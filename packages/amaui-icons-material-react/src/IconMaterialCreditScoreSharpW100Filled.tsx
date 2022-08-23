import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreSharpW100Filled'
      short_name='CreditScore'

      {...props}
    >
      <path d="M14.55 20.1 11.2 16.75 11.7 16.25 14.55 19.1 20.25 13.4 20.75 13.9ZM4 10.95H20V9.05H4ZM3.3 18.7V5.3H20.7V10.95H19.875L14.55 16.275L11.7 13.425L8.375 16.75L9.625 18V18.7Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreSharpW100Filled.displayName = 'AmauiIconMaterialCreditScoreSharpW100Filled';

export default IconMaterialCreditScoreSharpW100Filled;
