import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScore'

      short_name='SleepScore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 176q117 0 198.5 81.5T880 456h-80q0-40-14.5-74.5T746 320l-55 93q-10 16-21.5 35T645 481q-14 15-35 15t-36-14q-15-14-15-35t15-36q14-14 33.5-25t35.5-21l93-55q-27-25-61.5-39.5T600 256v-80ZM483 976q-84 0-157.5-32t-128-86.5Q143 803 111 729.5T79 572q0-146 93-257.5T409 176q-18 99 11 193.5T520 535q71 71 165.5 100T879 646q-26 144-138 237t-258 93Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463 591q-61-61-97-138t-43-163q-77 43-120.5 118.5T159 572q0 135 94.5 229.5T483 896Zm-20-305Z"/>
    </Icon>
  );
});

IconMaterialSleepScore.displayName = 'AmauiIconMaterialSleepScore';

export default IconMaterialSleepScore;
