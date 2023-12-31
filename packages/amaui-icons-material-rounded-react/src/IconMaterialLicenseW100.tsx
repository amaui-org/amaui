import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLicenseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LicenseW100'

      short_name='License'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-492q-29 0-48.5-19.5T412-560q0-29 19.5-48.5T480-628q29 0 48.5 19.5T548-560q0 29-19.5 48.5T480-492Zm0 318-150 43q-14 5-26-4.273-12-9.272-12-24.727v-210q-38-36-59-85.207Q212-504.414 212-560q0-112.225 77.841-190.112Q367.683-828 479.841-828 592-828 670-750.112 748-672.225 748-560q0 55.586-21 104.793Q706-406 668-370v210q0 15.455-12 24.727Q644-126 630-131l-150-43Zm0-146q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-158l160-46 160 46v-188q-33 26-74.219 40-41.219 14-86 14T394-306q-41-14-74-40v188Zm160-94Z"/>
    </Icon>
  );
});

IconMaterialLicenseW100.displayName = 'AmauiIconMaterialLicenseW100';

export default IconMaterialLicenseW100;
