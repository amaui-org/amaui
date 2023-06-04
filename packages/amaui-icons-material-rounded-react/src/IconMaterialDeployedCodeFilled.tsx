import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeFilled'

      short_name='DeployedCode'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 965 160 804q-19-11-29.5-29T120 735V417q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800 804L520 965q-19 11-40 11t-40-11Zm40-69 40-23V599l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139v274l40 23Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeFilled.displayName = 'AmauiIconMaterialDeployedCodeFilled';

export default IconMaterialDeployedCodeFilled;
