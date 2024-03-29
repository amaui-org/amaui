import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreFilled'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 22-4.25-4.25 1.4-1.4 2.85 2.8 5.65-5.65 1.4 1.45ZM4 12h16V8H4Zm-2 8V4h20v8h-2.725l-4.325 4.325-2.825-2.825-4.25 4.25.225.25v2Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreFilled.displayName = 'AmauiIconMaterialCreditScoreFilled';

export default IconMaterialCreditScoreFilled;
