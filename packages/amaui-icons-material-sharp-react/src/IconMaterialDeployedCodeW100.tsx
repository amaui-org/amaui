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
      <path d="m200 734 266 154V584L200 430v304Zm294 154 266-154V430L494 584v304ZM217 408l263 152 263-152-263-152-263 152Zm-45 343V401l308-177 308 177v350L480 928 172 751Zm308-175Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100.displayName = 'AmauiIconMaterialDeployedCodeW100';

export default IconMaterialDeployedCodeW100;
