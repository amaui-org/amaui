import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPauseFilled'

      short_name='TimerPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-280q17 0 28.5-11.5T440-320v-240q0-17-11.5-28.5T400-600q-17 0-28.5 11.5T360-560v240q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-240q0-17-11.5-28.5T560-600q-17 0-28.5 11.5T520-560v240q0 17 11.5 28.5T560-280ZM400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimerPauseFilled.displayName = 'AmauiIconMaterialTimerPauseFilled';

export default IconMaterialTimerPauseFilled;
