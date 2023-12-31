import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonApronFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonApronFilled'

      short_name='PersonApron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm160 320v-256q25 8 49 17t47 21q30 15 47 43.5t17 62.5v112H640ZM400-300v-134q20-3 40-4.5t40-1.5q20 0 40 1.5t40 4.5v134H400ZM160-160v-112q0-34 17-62.5t47-43.5q23-12 47-21t49-17v256H160Z"/>
    </Icon>
  );
});

IconMaterialPersonApronFilled.displayName = 'AmauiIconMaterialPersonApronFilled';

export default IconMaterialPersonApronFilled;
