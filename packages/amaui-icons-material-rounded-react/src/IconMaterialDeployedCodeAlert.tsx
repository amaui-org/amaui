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
      <path d="M480-503Zm-40-366q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v170q-18-13-38-22.5T760-508v-88l-144 83q-56 14-101.5 47.5T440-384v-73L200-596v274l202 117q4 32 15 61.5T445-88q-2-1-2.5-1.5T440-91L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161Zm40 69L243-663l237 137 237-137-237-137ZM680-40q-83 0-141.5-58.5T480-240q0-83 58.5-141.5T680-440q83 0 141.5 58.5T880-240q0 83-58.5 141.5T680-40Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAlert.displayName = 'AmauiIconMaterialDeployedCodeAlert';

export default IconMaterialDeployedCodeAlert;
