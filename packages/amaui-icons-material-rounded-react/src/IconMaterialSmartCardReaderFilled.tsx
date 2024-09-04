import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderFilled'

      short_name='SmartCardReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-80q0-33 23.5-56.5T160-280h640q33 0 56.5 23.5T880-200v80q0 17-11.5 28.5T840-80H120Zm120-260q-17 0-28.5-11.5T200-380v-420q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v420q0 17-11.5 28.5T720-340H240Zm110-61q20 0 36-12.5t27-30.5q16-26 21.5-56t5.5-60q0-30-5.5-60T413-676q-11-18-27.5-30.5T348-719q-12 0-20 9t-8 22v256q0 13 8.5 22t21.5 9Zm210-79q33 0 56.5-23.5T640-560q0-33-23.5-56.5T560-640q-33 0-56.5 23.5T480-560q0 33 23.5 56.5T560-480Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderFilled.displayName = 'AmauiIconMaterialSmartCardReaderFilled';

export default IconMaterialSmartCardReaderFilled;
