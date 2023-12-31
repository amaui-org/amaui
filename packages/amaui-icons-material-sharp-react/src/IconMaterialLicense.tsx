import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLicense = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='License'

      short_name='License'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z"/>
    </Icon>
  );
});

IconMaterialLicense.displayName = 'AmauiIconMaterialLicense';

export default IconMaterialLicense;
