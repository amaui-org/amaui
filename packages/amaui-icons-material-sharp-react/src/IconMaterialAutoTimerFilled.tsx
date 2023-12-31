import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTimerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTimerFilled'

      short_name='AutoTimer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-640-62 138-138 62 138 62 62 138 62-138 138-62-138-62-62-138ZM360-840v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAutoTimerFilled.displayName = 'AmauiIconMaterialAutoTimerFilled';

export default IconMaterialAutoTimerFilled;
