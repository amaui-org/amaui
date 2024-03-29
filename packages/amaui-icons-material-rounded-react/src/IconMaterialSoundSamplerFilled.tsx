import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSoundSamplerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundSamplerFilled'

      short_name='SoundSampler'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 576q0-144 88.5-252T392 186q20-5 34 4t14 28q0 20-13 31.5T394 267q-103 28-168.5 112.5T160 576q0 44 11 84.5t31 75.5q10 17 9.5 34T197 801q-13 13-28 11t-25-18q-31-48-47.5-102.5T80 576Zm400 400q-61 0-116.5-17T260 911q-15-10-17-25.5t10-28.5q13-14 30-14t34 10q36 21 77 32t86 11q45 0 86-11t77-32q17-10 34-10.5t30 13.5q12 13 10 29t-17 26q-48 31-103.5 48T480 976Zm400-400q0 61-16.5 115.5T816 794q-10 16-25 18t-28-11q-14-14-14.5-31t9.5-34q20-35 31-75.5t11-84.5q0-112-65.5-196.5T566 267q-20-6-33-17.5T520 218q0-19 14-28t34-4q135 30 223.5 138T880 576ZM380 719V433q0-12 10.5-18t20.5 1l223 143q9 6 9 17t-9 17L411 736q-10 7-20.5 1T380 719Z"/>
    </Icon>
  );
});

IconMaterialSoundSamplerFilled.displayName = 'AmauiIconMaterialSoundSamplerFilled';

export default IconMaterialSoundSamplerFilled;
