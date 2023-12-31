import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeUpdate'

      short_name='DeployedCodeUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-120 120-120-28-28-72 72v-164h-40v164l-72-72-28 28 120 120ZM480-503ZM120-685l360-207 360 207v216q-18-13-38-22.5T760-508v-88l-144 83q-56 14-101.5 47.5T440-384v-73L200-596v274l202 117q4 32 15 61.5T445-88L120-275v-410Zm123 22 237 137 237-137-237-137-237 137ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeUpdate.displayName = 'AmauiIconMaterialDeployedCodeUpdate';

export default IconMaterialDeployedCodeUpdate;
