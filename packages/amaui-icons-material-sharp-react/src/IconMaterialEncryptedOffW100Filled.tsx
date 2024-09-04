import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffW100Filled'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-461-14 75h70l-4-23-52-52Zm333 333L660-260q-35 44-82 77.5T480-134q-122-38-195-146t-73-236v-192l-80-80 20-20 660 660-20 20Zm-80-220L526-534q3-6 5-12.5t2-13.5q0-22-15.5-37.5T480-613q-7 0-13.5 2t-12.5 5L302-758l178-66 268 100v208q0 38-8 79t-28 89Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffW100Filled.displayName = 'AmauiIconMaterialEncryptedOffW100Filled';

export default IconMaterialEncryptedOffW100Filled;
