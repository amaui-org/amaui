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
      <path d="M312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v62H280v532h428v62q0 24.75-17.62 42.37Q672.75-92 648-92H312Zm273.19-258q-20.19 0-34.69-14.29Q536-378.58 536-399v-128.86q0-20.14 14.29-34.64T585-577h32.5l32.5-33h64.43l32.22 33h32.21q20.14 0 34.64 14.29T828-528v128.86q0 20.14-14.29 34.64T779-350H585.19ZM682-407q23 0 40-17t17-40.14q0-23.14-17-39.5T682-520q-23 0-40 16.36t-17 39.5Q625-441 642-424t40 17Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneCameraW100Filled.displayName = 'AmauiIconMaterialSmartphoneCameraW100Filled';

export default IconMaterialSmartphoneCameraW100Filled;
