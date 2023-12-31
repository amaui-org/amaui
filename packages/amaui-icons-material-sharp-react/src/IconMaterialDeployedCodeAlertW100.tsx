import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlertW100'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-190q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-72h28v-108h-28v108ZM480-495ZM172-655l308-177 308 177v129q-7-3-13.5-5.5T760-536v-90l-151 87q-44 12-80.5 37T466-442v-30L200-626v304l227 132q4 11 9 21.5t11 21.5L172-305v-350Zm45 7 263 152 263-152-263-152-263 152Zm463 516q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlertW100.displayName = 'AmauiIconMaterialDeployedCodeAlertW100';

export default IconMaterialDeployedCodeAlertW100;
