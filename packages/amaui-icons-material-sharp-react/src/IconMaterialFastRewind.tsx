import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewind'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.5 18-9-6 9-6Zm-10 0-9-6 9-6Zm-2-6Zm10 0Zm-10 2.25v-4.5L6.1 12Zm10 0v-4.5L16.1 12Z"/>
    </Icon>
  );
});

IconMaterialFastRewind.displayName = 'AmauiIconMaterialFastRewind';

export default IconMaterialFastRewind;
