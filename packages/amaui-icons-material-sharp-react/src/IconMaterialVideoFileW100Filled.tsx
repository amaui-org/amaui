import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100Filled'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 17.5h5v-2.1l1.8.95v-2.7l-1.8.95v-2.1h-5ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100Filled.displayName = 'AmauiIconMaterialVideoFileW100Filled';

export default IconMaterialVideoFileW100Filled;
