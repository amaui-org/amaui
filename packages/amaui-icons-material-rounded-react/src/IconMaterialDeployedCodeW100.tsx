import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeployedCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeW100'

      short_name='DeployedCode'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m200 734 266 154V584L200 430v304Zm294 154 266-154V430L494 584v304ZM217 408l263 152 263-152-263-152-263 152Zm-45 343V436q0-16 8-30t22-22l248-143q14-8 30-8t30 8l248 143q14 8 22 22t8 30v280q0 16-8 30t-22 22L510 911q-14 8-30 8t-30-8L172 751Zm308-175Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100.displayName = 'AmauiIconMaterialDeployedCodeW100';

export default IconMaterialDeployedCodeW100;
