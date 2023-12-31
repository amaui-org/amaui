import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullCoverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverageW100'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-456h28v428h548v28H132Zm160-160v-456h576v456H292Zm28-28h520v-400H320v400Zm80-120h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80ZM320-360v-400 400Z"/>
    </Icon>
  );
});

IconMaterialFullCoverageW100.displayName = 'AmauiIconMaterialFullCoverageW100';

export default IconMaterialFullCoverageW100;
