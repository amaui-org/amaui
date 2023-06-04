import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid4x4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4W100'

      short_name='Grid4x4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 20.05v-3h-3v-.7h3v-4h-3v-.7h3v-4h-3v-.7h3v-3h.7v3h4v-3h.7v3h4v-3h.7v3h3v.7h-3v4h3v.7h-3v4h3v.7h-3v3h-.7v-3h-4v3h-.7v-3h-4v3Zm.7-3.7h4v-4h-4Zm4.7 0h4v-4h-4Zm-4.7-4.7h4v-4h-4Zm4.7 0h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4W100.displayName = 'AmauiIconMaterialGrid4x4W100';

export default IconMaterialGrid4x4W100;
