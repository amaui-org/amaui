import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPauseW100Filled'

      short_name='TimerPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-866v-28h200v28H380Zm100 734q-63.53 0-119.77-24Q304-180 262-222q-42-42-66-98.23-24-56.24-24-119.77 0-63.53 24-119.77Q220-616 262-658q42-42 98.23-66 56.24-24 119.77-24 57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440q0 63.53-24 119.77Q740-264 698-222q-42 42-98.23 66-56.24 24-119.77 24Zm-78-174h28v-268h-28v268Zm128 0h28v-268h-28v268Z"/>
    </Icon>
  );
});

IconMaterialTimerPauseW100Filled.displayName = 'AmauiIconMaterialTimerPauseW100Filled';

export default IconMaterialTimerPauseW100Filled;
