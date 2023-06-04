import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodtypeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodtypeFilled'

      short_name='Bloodtype'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18h6v-2H9Zm2-3h2v-2h2v-2h-2V9h-2v2H9v2h2Zm1 7q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialBloodtypeFilled.displayName = 'AmauiIconMaterialBloodtypeFilled';

export default IconMaterialBloodtypeFilled;
