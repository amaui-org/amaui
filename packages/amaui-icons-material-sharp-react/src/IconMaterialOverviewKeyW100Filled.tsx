import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100Filled'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 804V348h456v456H80Zm600 0V348h28v456h-28Zm172 0V348h28v456h-28Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100Filled.displayName = 'AmauiIconMaterialOverviewKeyW100Filled';

export default IconMaterialOverviewKeyW100Filled;
