import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAlert'

      short_name='DeployedCodeAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160ZM480-503ZM120-685l360-207 360 207v216q-18-13-38-22.5T760-508v-88l-144 83q-56 14-101.5 47.5T440-384v-73L200-596v274l202 117q4 32 15 61.5T445-88L120-275v-410Zm123 22 237 137 237-137-237-137-237 137ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlert.displayName = 'AmauiIconMaterialDeployedCodeAlert';

export default IconMaterialDeployedCodeAlert;
