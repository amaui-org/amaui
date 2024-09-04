import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdaptiveAudioMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdaptiveAudioMicFilled'

      short_name='AdaptiveAudioMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-33 0-56.5-23.5T400-360v-120q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480v120q0 33-23.5 56.5T480-280Zm0 60q51 0 89-32t49-84q2-11 10-17.5t19-6.5q14 0 23 10.5t7 24.5q-9 61-55.5 107T510-162v52q0 13-8.5 21.5T480-80q-13 0-21.5-8.5T450-110v-52q-65-10-111.5-56T283-325q-2-14 7-24.5t23-10.5q11 0 19 6.5t10 17.5q11 52 49 84t89 32ZM80-400q-17 0-28.5-11.5T40-440v-23q0-35 14.5-62.5T95-567q40-21 86-32t99-11q16 0 31 1t30 3q9 2 10.5 10.5T345-582q-45 27-76 69t-42 93q-2 8-9 14t-15 6H80Zm677 0q-8 0-15-6t-9-14q-11-51-41.5-93T616-582q-8-5-6.5-13.5T619-606q15-2 30-3t31-1q53 0 99 11t86 32q26 14 40.5 41.5T920-463v23q0 17-11.5 28.5T880-400H757ZM280-640q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm400 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAdaptiveAudioMicFilled.displayName = 'AmauiIconMaterialAdaptiveAudioMicFilled';

export default IconMaterialAdaptiveAudioMicFilled;
