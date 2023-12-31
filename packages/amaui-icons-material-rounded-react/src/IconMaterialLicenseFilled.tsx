import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLicenseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LicenseFilled'

      short_name='License'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 320L293-58q-20 7-36.5-5T240-95v-254q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v254q0 20-16.5 32T667-58l-187-62Zm0-200q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialLicenseFilled.displayName = 'AmauiIconMaterialLicenseFilled';

export default IconMaterialLicenseFilled;
