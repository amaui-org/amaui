import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalHospitalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalW100'

      short_name='LocalHospital'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.475 16.35h1.05v-3.825h3.825v-1.05h-3.825V7.65h-1.05v3.825H7.65v1.05h3.825ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalW100.displayName = 'AmauiIconMaterialLocalHospitalW100';

export default IconMaterialLocalHospitalW100;
