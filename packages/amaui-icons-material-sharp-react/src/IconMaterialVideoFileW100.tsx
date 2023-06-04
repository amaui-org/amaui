import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 17.5h5v-2.1l1.8.95v-2.7l-1.8.95v-2.1h-5ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100.displayName = 'AmauiIconMaterialVideoFileW100';

export default IconMaterialVideoFileW100;
