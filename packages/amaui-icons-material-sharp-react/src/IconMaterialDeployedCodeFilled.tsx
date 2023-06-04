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
      <path d="M120 781V371l360-207 360 207v410L480 988 120 781Zm360 115 40-23V599l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139v274l40 23Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeFilled.displayName = 'AmauiIconMaterialDeployedCodeFilled';

export default IconMaterialDeployedCodeFilled;
