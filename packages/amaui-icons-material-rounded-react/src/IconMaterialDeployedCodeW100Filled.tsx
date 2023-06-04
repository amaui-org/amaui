import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeW100Filled'

      short_name='DeployedCode'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 911 202 768q-14-8-22-22t-8-30V436q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510 911q-14 8-30 8t-30-8Zm30-15 14-8V584l266-154v-12l-17-10-263 152-263-152-17 10v12l266 154v304l14 8Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100Filled.displayName = 'AmauiIconMaterialDeployedCodeW100Filled';

export default IconMaterialDeployedCodeW100Filled;
