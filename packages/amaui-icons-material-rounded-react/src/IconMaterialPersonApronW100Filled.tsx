import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonApronW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonApronW100Filled'

      short_name='PersonApron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-512q-44.55 0-76.275-31.725Q372-575.45 372-620q0-44.55 31.725-76.275Q435.45-728 480-728q44.55 0 76.275 31.725Q588-664.55 588-620q0 44.55-31.725 76.275Q524.55-512 480-512Zm130 280v-157q22.917 6.947 44.917 15.197T698-356q22 11 36 30.104 14 19.105 14 41.896v22q0 12.75-8.625 21.375T718-232H610Zm-232-88v-76q25.5-6 51-9t51-3q25.5 0 51 3t51 9v76H378Zm-166 58v-22q0-22.791 14-41.896Q240-345 262-356q21.083-9.553 43.083-17.803T350-389v157H242q-12.75 0-21.375-8.625T212-262Z"/>
    </Icon>
  );
});

IconMaterialPersonApronW100Filled.displayName = 'AmauiIconMaterialPersonApronW100Filled';

export default IconMaterialPersonApronW100Filled;
