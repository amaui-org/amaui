import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepFilled'

      short_name='Sleep'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M483 976q-84 0-157.5-32t-128-86.5Q143 803 111 729.5T79 572q0-146 93-257.5T409 176q-18 99 11 193.5T520 535q71 71 165.5 100T879 646q-26 144-138 237t-258 93Zm237-480-50-110-110-50 110-50 50-110 50 110 110 50-110 50-50 110Z"/>
    </Icon>
  );
});

IconMaterialSleepFilled.displayName = 'AmauiIconMaterialSleepFilled';

export default IconMaterialSleepFilled;
