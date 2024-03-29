import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnancy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pregnancy'

      short_name='Pregnancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-720q-33 0-56.5-23.5T360-800q0-33 23.5-56.5T440-880q33 0 56.5 23.5T520-800q0 33-23.5 56.5T440-720Zm20 640q-25 0-42.5-17.5T400-140v-140h-40q-17 0-28.5-11.5T320-320v-240q0-50 35-85t85-35q50 0 85 35t35 85q36 15 58 48t22 72v120q0 17-11.5 28.5T600-280h-80v140q0 25-17.5 42.5T460-80Z"/>
    </Icon>
  );
});

IconMaterialPregnancy.displayName = 'AmauiIconMaterialPregnancy';

export default IconMaterialPregnancy;
