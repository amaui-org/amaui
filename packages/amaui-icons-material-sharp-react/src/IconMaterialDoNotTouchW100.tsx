import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchW100'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5-5v2h-6.1l-5.7-6.05.775-.75L8.3 14.225V9.3L2.25 3.25l.5-.5L21.8 21.8Zm-9.025-9.025Zm4.025.2-.7-.7V12.1h-.675L12.9 10.075V4.2H14v6.975l.225.225h.975V5.8h1.1Zm-4.6-4.6-1.1-1.1V3.4h1.1Zm-2.3-2.3-1.1-1.1V5h1.1Zm5.525 5.525Zm-4.45 6.5H15.6v-2L9 10v5.075H7.175Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchW100.displayName = 'AmauiIconMaterialDoNotTouchW100';

export default IconMaterialDoNotTouchW100;
