import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCode'

      short_name='DeployedCode'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m200 734 240 139V599L200 460v274Zm320 139 240-139V460L520 599v274ZM243 393l237 137 237-137-237-137-237 137ZM120 781V371l360-207 360 207v410L480 988 120 781Zm360-205Z"/>
    </Icon>
  );
});

IconMaterialDeployedCode.displayName = 'AmauiIconMaterialDeployedCode';

export default IconMaterialDeployedCode;
