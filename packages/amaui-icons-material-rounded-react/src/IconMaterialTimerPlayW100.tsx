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
      <path d="m443-344 126-84q7-5 7-12t-7-12l-126-84q-8-5-15.5-1t-7.5 13v168q0 9 7.5 13t15.5-1Zm-49-522q-6 0-10-4t-4-10q0-6 4-10t10-4h172q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm86 734q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q57 0 110.5 21t97.5 59l30-30q4-4 9.5-4.5T738-698q5 5 5 10t-5 10l-30 30q38 44 59 97.5T788-440q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm0-28q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialTimerPlayW100.displayName = 'AmauiIconMaterialTimerPlayW100';

export default IconMaterialTimerPlayW100;
