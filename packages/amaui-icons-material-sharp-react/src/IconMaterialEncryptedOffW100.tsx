import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffW100'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M526-534q3-6 5-12.5t2-13.5q0-22-15.5-37.5T480-613q-7 0-13.5 2t-12.5 5l72 72Zm186 186-22-22q14-32 22-71t8-75v-189l-240-89-156 58-22-22 178-66 268 100v208q0 38-8 79t-28 89Zm80 220L660-260q-35 44-82 77.5T480-134q-122-38-195-146t-73-236v-192l-80-80 20-20 660 660-20 20ZM459-461Zm19-121Zm2 418q45-14 90.5-48.5T640-280L511-409l4 23h-70l14-75-219-219v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffW100.displayName = 'AmauiIconMaterialEncryptedOffW100';

export default IconMaterialEncryptedOffW100;
