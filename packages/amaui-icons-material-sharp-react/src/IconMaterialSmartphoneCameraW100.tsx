import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneCameraW100'

      short_name='SmartphoneCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v122H280v532h428v122H252Zm28-28h400v-66H280v66Zm0-654h400v-66H280v66Zm256 424v-227h81l33-33h64l32.57 33H828v227H536Zm146-57q23 0 40-17t17-40.14q0-23.14-17-39.5T682-520q-23 0-40 16.36t-17 39.5Q625-441 642-424t40 17ZM280-120v-66 66Zm0-654v-66 66Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneCameraW100.displayName = 'AmauiIconMaterialSmartphoneCameraW100';

export default IconMaterialSmartphoneCameraW100;
