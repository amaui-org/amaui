import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalInformationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationW100Filled'

      short_name='MedicalInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 17.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm5.1-3.1h5.35v-.7H13Zm0 2.2h3.35v-.7H13Zm.7-8.15h7v12.4H3.3V8.3h7v-5h3.4ZM11 9h2V4h-2Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationW100Filled.displayName = 'AmauiIconMaterialMedicalInformationW100Filled';

export default IconMaterialMedicalInformationW100Filled;
