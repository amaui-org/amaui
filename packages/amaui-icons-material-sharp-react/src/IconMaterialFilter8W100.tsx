import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter8W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8W100'

      short_name='Filter8'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.35 10-.35.35v4h4.7v-4l-.35-.35.35-.35v-4H11v4ZM15 6.35v3.3h-3.3v-3.3Zm0 4v3.3h-3.3v-3.3ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter8W100.displayName = 'AmauiIconMaterialFilter8W100';

export default IconMaterialFilter8W100;
