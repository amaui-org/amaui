import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureFilled'

      short_name='Nature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22v-2h6v-4H9q-2.075 0-3.537-1.463Q4 13.075 4 11q0-1.5.825-2.763Q5.65 6.975 7.05 6.4q.225-1.875 1.638-3.138Q10.1 2 12 2t3.312 1.262Q16.725 4.525 16.95 6.4q1.4.575 2.225 1.837Q20 9.5 20 11q0 2.075-1.462 3.537Q17.075 16 15 16h-2v4h6v2Z"/>
    </Icon>
  );
});

IconMaterialNatureFilled.displayName = 'AmauiIconMaterialNatureFilled';

export default IconMaterialNatureFilled;
