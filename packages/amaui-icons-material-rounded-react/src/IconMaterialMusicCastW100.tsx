import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicCastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCastW100'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M571-212q-44.55 0-76.275-31.725Q463-275.45 463-320q0-44.55 31.725-76.275Q526.45-428 571-428q23 0 44 9t36 27v-342q0-12.75 8.744-21.375T681.415-764h121.659q12.926 0 21.426 8.625Q833-746.75 833-734v24q0 12.75-8.625 21.375T803-680H679v360q0 44.55-31.725 76.275Q615.55-212 571-212ZM278-614q-54 54-87 125t-36 152q0 7-4.025 12T141-320q-7 0-10.5-5.5T127-338q4-87 39-163t92-133q57-57 132.5-91.5T553-764q7 0 12.5 3.5t5.5 10q0 6.5-5 10.5t-12 4q-81 3-151.5 35.5T278-614Zm118 119q-31 31-50 71.5T324-336q-1.05 6.974-5.075 11.487T308.95-320q-5.95 0-9.95-5-4-5-4-11 3-53 24.5-98.5T376-515q35-35 80.5-56.5T555-596q6 0 11 3.929 5 3.928 5 10 0 6.071-4.513 10.052T555-567q-47 3-87.5 22T396-495Z"/>
    </Icon>
  );
});

IconMaterialMusicCastW100.displayName = 'AmauiIconMaterialMusicCastW100';

export default IconMaterialMusicCastW100;
