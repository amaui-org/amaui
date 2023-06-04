import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalHospitalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalFilled'

      short_name='LocalHospital'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalFilled.displayName = 'AmauiIconMaterialLocalHospitalFilled';

export default IconMaterialLocalHospitalFilled;
