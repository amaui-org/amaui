import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100Filled'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M697-184q-6 0-11-2t-10-7l-91-91q-11-11-15-22.5t-4-23.5q0-26 18-46t47-20q23 0 36 10.5t30 27.5q17-17 30-27.5t36-10.5q30 0 47.5 20t17.5 46q0 12-4.5 24T809-284l-91 91q-5 5-10 7t-11 2Zm-505-28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v179q-7-4-13.5-7.5T800-523v-75H160v76h432q-69 30-112 94t-43 144q0 19 2.5 37t7.5 35H192Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100Filled.displayName = 'AmauiIconMaterialCreditCardHeartW100Filled';

export default IconMaterialCreditCardHeartW100Filled;
