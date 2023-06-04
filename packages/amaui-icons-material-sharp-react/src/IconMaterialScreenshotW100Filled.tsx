import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotW100Filled'

      short_name='Screenshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 10.05v-3.2h3.2v.7H9.2v2.5Zm3.8 7.1v-.7h2.5v-2.5h.7v3.2Zm-6 4.55V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotW100Filled.displayName = 'AmauiIconMaterialScreenshotW100Filled';

export default IconMaterialScreenshotW100Filled;
