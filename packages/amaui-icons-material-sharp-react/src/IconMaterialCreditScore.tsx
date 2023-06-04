import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScore'

      short_name='CreditScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 8h16V6H4ZM2 20V4h20v8H4v6h4.1v2Zm12.95 2-4.25-4.25 1.4-1.4 2.85 2.8 5.65-5.65 1.4 1.45ZM4 6v12-4.5 2.825V6Z"/>
    </Icon>
  );
});

IconMaterialCreditScore.displayName = 'AmauiIconMaterialCreditScore';

export default IconMaterialCreditScore;
