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
      <path d="m14.025 19.575-2.6-2.6q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2.6 2.6 5.475-5.475q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-5.425 5.425q-.225.225-.525.225-.3 0-.525-.225ZM4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v4.15h-.825l-5.325 5.325-1.175-1.2q-.7-.675-1.675-.675-.975 0-1.65.675-.725.725-.725 1.675 0 .95.7 1.65l.3.3ZM4 10.95h16v-1.9H4Z"/>
    </Icon>
  );
});

IconMaterialCreditScoreW100Filled.displayName = 'AmauiIconMaterialCreditScoreW100Filled';

export default IconMaterialCreditScoreW100Filled;
