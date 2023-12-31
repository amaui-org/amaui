import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlertW100Filled'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-190q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-72h28v-108h-28v108Zm-494-43v-350l308-177 308 177v130q-25-11-52.5-17t-56.5-6q-18 0-35.5 2t-34.5 7l151-87v-12l-17-10-263 152-263-152-17 10v12l266 154v30q-26 34-40 74.5T412-281q0 37 9.5 71t26.5 64L172-305Zm508 173q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlertW100Filled.displayName = 'AmauiIconMaterialDeployedCodeAlertW100Filled';

export default IconMaterialDeployedCodeAlertW100Filled;
