import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVitalSignsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSignsW100'

      short_name='VitalSigns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 12.35v-.7h5.1l2.1 5.25 4.9-11.65 2.65 6.4h4.6v.7h-5.1l-2.15-5.275-4.925 11.65L6.95 12.35Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsW100.displayName = 'AmauiIconMaterialVitalSignsW100';

export default IconMaterialVitalSignsW100;
