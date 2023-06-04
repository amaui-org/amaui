import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardiologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardiologyW100Filled'

      short_name='Cardiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m436 666-61-91q-5-6-11-9.5t-14-3.5H172q-23-35-31.5-65t-8.5-61q0-71 48.5-119.5T300 268q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828 436q0 31-8.5 61T788 562H606l-75-113q-2-3-5.5-4.5T518 443q-4 0-7 2.5t-4 6.5l-71 214Zm4 177q-65-59-130-120.5T192 590h160l76 114q2 4 6 5t8 1q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h160q-53 71-118 132.5T520 843q-8 8-18.5 12t-21.5 4q-11 0-21.5-4T440 843Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100Filled.displayName = 'AmauiIconMaterialCardiologyW100Filled';

export default IconMaterialCardiologyW100Filled;
