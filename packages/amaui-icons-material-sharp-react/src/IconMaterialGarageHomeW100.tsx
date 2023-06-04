import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeW100'

      short_name='GarageHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575l6.7 5.075V19.7H18V10l-6-4.55L6 10v9.7Zm3.05-.725h7.3v-3.3h-7.3Zm0-4h7.3v-3.3h-7.3Zm-.7 4.7v-8.7h8.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeW100.displayName = 'AmauiIconMaterialGarageHomeW100';

export default IconMaterialGarageHomeW100;
