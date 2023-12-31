import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningW100Filled'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m405-622 46-86v-28h-60v-40h208v52l-34 68h-64v-42l-72 76h-24Zm-44 490v-233l140-263h76v496H361Z"/>
    </Icon>
  );
});

IconMaterialCleaningW100Filled.displayName = 'AmauiIconMaterialCleaningW100Filled';

export default IconMaterialCleaningW100Filled;
