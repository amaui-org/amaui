import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPlay'

      short_name='TimerPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m431-301 184-122q9-6 9-17t-9-17L431-579q-10-7-20.5-1.5T400-563v246q0 12 10.5 17.5T431-301Zm-31-539q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialTimerPlay.displayName = 'AmauiIconMaterialTimerPlay';

export default IconMaterialTimerPlay;
