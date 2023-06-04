import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyringeW100Filled'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m319 403-59-58-41 41-20-20 100-101 21 20-41 41 59 58 106-106 20 20-32 32 79 79-92 92 20 20 92-92 90 90-93 94 20 18 93-92 99 98-74 74 153 153h-40L646 731l-73 73-308-307-31 31-19-19 104-106Z"/>
    </Icon>
  );
});

IconMaterialSyringeW100Filled.displayName = 'AmauiIconMaterialSyringeW100Filled';

export default IconMaterialSyringeW100Filled;
