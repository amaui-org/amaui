import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalInformation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformation'

      short_name='MedicalInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18h2v-2h2v-2H9v-2H7v2H5v2h2Zm6-3.5h6V13h-6Zm0 3h4V16h-4ZM15 7h7v15H2V7h7V2h6Zm-4 2h2V4h-2Zm1 5.5ZM9 9H4v11h16V9h-5v2H9Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformation.displayName = 'AmauiIconMaterialMedicalInformation';

export default IconMaterialMedicalInformation;
