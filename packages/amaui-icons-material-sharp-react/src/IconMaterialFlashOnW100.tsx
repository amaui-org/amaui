import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnW100'

      short_name='FlashOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 21.9V14h-2.65V3.5h8.75l-3.5 7.85h3.5Z"/>
    </Icon>
  );
});

IconMaterialFlashOnW100.displayName = 'AmauiIconMaterialFlashOnW100';

export default IconMaterialFlashOnW100;
