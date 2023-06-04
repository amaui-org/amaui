import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.425 16.2-6.3-4.2 6.3-4.2Zm-8.55 0-6.3-4.2 6.3-4.2Zm-.7-4.2Zm8.55 0Zm-8.55 2.9V9.1L5.825 12Zm8.55 0V9.1l-4.35 2.9Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100.displayName = 'AmauiIconMaterialFastRewindW100';

export default IconMaterialFastRewindW100;
