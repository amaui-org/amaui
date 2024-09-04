import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimerPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerPlayW100'

      short_name='TimerPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-866v-28h200v28H380Zm100 734q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm0-28q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Zm-60 112 168-112-168-112v224Z"/>
    </Icon>
  );
});

IconMaterialTimerPlayW100.displayName = 'AmauiIconMaterialTimerPlayW100';

export default IconMaterialTimerPlayW100;
