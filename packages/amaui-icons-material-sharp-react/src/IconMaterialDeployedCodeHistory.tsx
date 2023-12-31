import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeHistory'

      short_name='DeployedCodeHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m746-146 28-28-74-74v-112h-40v128l86 86ZM480-503ZM120-685l360-207 360 207v216q-18-13-38-22.5T760-508v-88l-144 83q-56 14-101.5 47.5T440-384v-73L200-596v274l202 117q4 32 15 61.5T445-88L120-275v-410Zm123 22 237 137 237-137-237-137-237 137ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeHistory.displayName = 'AmauiIconMaterialDeployedCodeHistory';

export default IconMaterialDeployedCodeHistory;
