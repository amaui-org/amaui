import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalHospitalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalW100Filled'

      short_name='LocalHospital'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.475 16.35h1.05v-3.825h3.825v-1.05h-3.825V7.65h-1.05v3.825H7.65v1.05h3.825ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalW100Filled.displayName = 'AmauiIconMaterialLocalHospitalW100Filled';

export default IconMaterialLocalHospitalW100Filled;
