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
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h5v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z"/></g>
    </Icon>
  );
});

IconMaterialCreditScore.displayName = 'AmauiIconMaterialCreditScore';

export default IconMaterialCreditScore;
