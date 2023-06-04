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
      <path d="M440 656h80V376h-80v280Zm120-60h80V416h-80v180Zm-240-20h80V416h-80v160Zm-80 400V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l65 255H760v200H600v80H240Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessFilled.displayName = 'AmauiIconMaterialMindfulnessFilled';

export default IconMaterialMindfulnessFilled;
