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
      <path d="M4 9.05h16V6H4Zm-.7 9.65V5.3h17.4v5.65H4V18h5.625v.7Zm11.25 1.4-3.35-3.35.5-.5 2.85 2.85 5.7-5.7.5.5ZM4 6v12-4.575 2.85V6Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100.displayName = 'AmauiIconMaterialCreditScoreW100';

export default IconMaterialCreditScoreW100;
