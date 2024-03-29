import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodtype = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bloodtype'

      short_name='Bloodtype'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18h6v-2H9Zm2-3h2v-2h2v-2h-2V9h-2v2H9v2h2Zm1 7q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialBloodtype.displayName = 'AmauiIconMaterialBloodtype';

export default IconMaterialBloodtype;
