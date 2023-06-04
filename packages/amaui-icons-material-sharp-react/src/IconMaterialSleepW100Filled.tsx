import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepW100Filled'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 924q-73 0-137-27.5T234 821q-48-48-75.5-112T131 572q0-108 59.5-196.5T350 247q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T483 924Zm213-511-30-67-67-30 67-30 30-67 30 67 67 30-67 30-30 67Z"/>
    </Icon>
  );
});

IconMaterialSleepW100Filled.displayName = 'AmauiIconMaterialSleepW100Filled';

export default IconMaterialSleepW100Filled;
