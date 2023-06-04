import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOn'

      short_name='FlashOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23v-9H7V2h10l-4 9h4Z"/>
    </Icon>
  );
});

IconMaterialFlashOn.displayName = 'AmauiIconMaterialFlashOn';

export default IconMaterialFlashOn;
