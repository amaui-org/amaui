import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchW100Filled'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5-5v2h-6.1l-5.7-6.05.775-.75L8.3 14.225V9.3L2.25 3.25l.5-.5L21.8 21.8Zm-5-8.825-3.4-3.4V4.2H14v6.975l.225.225h.975V5.8h1.1Zm-4.6-4.6-1.1-1.1V3.4h1.1Zm-2.3-2.3-1.1-1.1V5h1.1Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchW100Filled.displayName = 'AmauiIconMaterialDoNotTouchW100Filled';

export default IconMaterialDoNotTouchW100Filled;
