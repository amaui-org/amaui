import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneCameraW100Filled'

      short_name='SmartphoneCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v122H280v532h428v122H252Zm284-258v-227h81l33-33h64l32.57 33H828v227H536Zm146-57q23 0 40-17t17-40.14q0-23.14-17-39.5T682-520q-23 0-40 16.36t-17 39.5Q625-441 642-424t40 17Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneCameraW100Filled.displayName = 'AmauiIconMaterialSmartphoneCameraW100Filled';

export default IconMaterialSmartphoneCameraW100Filled;
