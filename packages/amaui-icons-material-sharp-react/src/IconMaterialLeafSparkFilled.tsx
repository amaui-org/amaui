import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeafSparkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeafSparkFilled'

      short_name='LeafSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80q-56 0-105.5-18T364-148l-84 84-56-56 84-84q-32-41-50-90.5T240-400q0-138 95.5-229T560-720h320v320q0 62-23.5 120T786-174q-48 47-106 70.5T560-80ZM220-560q0-75 52.5-127.5T400-740q-75 0-127.5-52.5T220-920q0 75-52.5 127.5T40-740q75 0 127.5 52.5T220-560Zm201 356 235-236-56-56-235 235 56 57Z"/>
    </Icon>
  );
});

IconMaterialLeafSparkFilled.displayName = 'AmauiIconMaterialLeafSparkFilled';

export default IconMaterialLeafSparkFilled;
