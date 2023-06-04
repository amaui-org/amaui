import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesW100Filled'

      short_name='MedicalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 17.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM3.3 20.7V7.3h6V4.6h5.4v2.7h6v13.4ZM10 7.3h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100Filled.displayName = 'AmauiIconMaterialMedicalServicesW100Filled';

export default IconMaterialMedicalServicesW100Filled;
