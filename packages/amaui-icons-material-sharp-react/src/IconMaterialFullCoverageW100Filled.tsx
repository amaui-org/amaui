import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullCoverageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverageW100Filled'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-456h28v428h548v28H132Zm160-160v-456h576v456H292Zm108-148h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialFullCoverageW100Filled.displayName = 'AmauiIconMaterialFullCoverageW100Filled';

export default IconMaterialFullCoverageW100Filled;
