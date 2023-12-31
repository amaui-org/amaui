import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullCoverageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullCoverageFilled'

      short_name='FullCoverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-560h80v480h600v80H80Zm160-160v-560h680v560H240Zm160-200h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialFullCoverageFilled.displayName = 'AmauiIconMaterialFullCoverageFilled';

export default IconMaterialFullCoverageFilled;
