import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter8W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8W100Filled'

      short_name='Filter8'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.35 10-.35.35v4h4.7v-4l-.35-.35.35-.35v-4H11v4ZM15 6.35v3.3h-3.3v-3.3Zm0 4v3.3h-3.3v-3.3ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter8W100Filled.displayName = 'AmauiIconMaterialFilter8W100Filled';

export default IconMaterialFilter8W100Filled;
