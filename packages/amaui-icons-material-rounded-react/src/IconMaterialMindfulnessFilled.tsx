import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMindfulnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessFilled'

      short_name='Mindfulness'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 976V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l52 205q5 19-7 34.5T840 696h-80v120q0 33-23.5 56.5T680 896h-80v80H240Zm240-600q-17 0-28.5 11.5T440 416v200q0 17 11.5 28.5T480 656q17 0 28.5-11.5T520 616V416q0-17-11.5-28.5T480 376Zm120 40q-17 0-28.5 11.5T560 456v100q0 17 11.5 28.5T600 596q17 0 28.5-11.5T640 556V456q0-17-11.5-28.5T600 416Zm-240 0q-17 0-28.5 11.5T320 456v80q0 17 11.5 28.5T360 576q17 0 28.5-11.5T400 536v-80q0-17-11.5-28.5T360 416Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessFilled.displayName = 'AmauiIconMaterialMindfulnessFilled';

export default IconMaterialMindfulnessFilled;
