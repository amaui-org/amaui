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
      <path d="m200 734 240 139V599L200 460v274Zm320 139 240-139V460L520 599v274ZM243 393l237 137 237-137-237-137-237 137ZM120 781V417q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800 804L520 965q-19 11-40 11t-40-11L120 781Zm360-205Z"/>
    </Icon>
  );
});

IconMaterialDeployedCode.displayName = 'AmauiIconMaterialDeployedCode';

export default IconMaterialDeployedCode;
