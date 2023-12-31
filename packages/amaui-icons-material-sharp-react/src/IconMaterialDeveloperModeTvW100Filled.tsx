import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperModeTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeTvW100Filled'

      short_name='DeveloperModeTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-172v-80H132v-536h696v536H588v80H372ZM172-520l104-104-20-20-124 124 124 124 20-20-104-104Zm616 0L684-416l20 20 124-124-124-124-20 20 104 104Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeTvW100Filled.displayName = 'AmauiIconMaterialDeveloperModeTvW100Filled';

export default IconMaterialDeveloperModeTvW100Filled;
