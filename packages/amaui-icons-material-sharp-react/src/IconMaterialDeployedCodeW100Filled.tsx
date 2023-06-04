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
      <path d="M172 751V401l308-177 308 177v350L480 928 172 751Zm308 145 14-8V584l266-154v-12l-17-10-263 152-263-152-17 10v12l266 154v304l14 8Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeW100Filled.displayName = 'AmauiIconMaterialDeployedCodeW100Filled';

export default IconMaterialDeployedCodeW100Filled;
