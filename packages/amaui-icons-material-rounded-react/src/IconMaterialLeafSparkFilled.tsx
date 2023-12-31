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
      <path d="M560-80q-56 0-105.5-18T364-148l-56 56q-12 12-28 12t-28-12q-12-12-12-28t12-28l56-56q-32-41-50-90.5T240-400q0-138 95.5-229T560-720h240q33 0 56.5 23.5T880-640v240q0 62-23.5 120T786-174q-48 47-106 70.5T560-80ZM220-560q0-75 52.5-127.5T400-740q-75 0-127.5-52.5T220-920q0 75-52.5 127.5T40-740q75 0 127.5 52.5T220-560Zm352 92L393-289q-12 12-11.5 28t11.5 28q12 12 28 12.5t28-11.5l179-180q12-12 12-28t-12-28q-12-12-28-12t-28 12Z"/>
    </Icon>
  );
});

IconMaterialLeafSparkFilled.displayName = 'AmauiIconMaterialLeafSparkFilled';

export default IconMaterialLeafSparkFilled;
