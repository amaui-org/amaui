import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Publish'

      short_name='Publish'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20v-8.15l-2.6 2.6L7 13l5-5 5 5-1.4 1.45-2.6-2.6V20ZM4 9V4h16v5h-2V6H6v3Z"/>
    </Icon>
  );
});

IconMaterialPublish.displayName = 'AmauiIconMaterialPublish';

export default IconMaterialPublish;
