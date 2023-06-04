import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreW100Filled'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.55 20.1-3.35-3.35.5-.5 2.85 2.85 5.7-5.7.5.5ZM4 10.95h16v-1.9H4Zm-.7 7.75V5.3h17.4v5.65h-.825l-5.325 5.325-2.85-2.85-3.325 3.325L9.625 18v.7Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100Filled.displayName = 'AmauiIconMaterialCreditScoreW100Filled';

export default IconMaterialCreditScoreW100Filled;
