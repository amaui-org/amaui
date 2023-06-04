import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesFilled'

      short_name='MedicalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3Zm-9 4V6h6V2h8v4h6v16Zm8-16h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesFilled.displayName = 'AmauiIconMaterialMedicalServicesFilled';

export default IconMaterialMedicalServicesFilled;
