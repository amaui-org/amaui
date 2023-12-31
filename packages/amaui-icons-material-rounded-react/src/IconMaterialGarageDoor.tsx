import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageDoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoor'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480h240q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400H360q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480Zm0 120h240q17 0 28.5 11.5T640-320q0 17-11.5 28.5T600-280H360q-17 0-28.5-11.5T320-320q0-17 11.5-28.5T360-360Zm0 120h240q17 0 28.5 11.5T640-200q0 17-11.5 28.5T600-160H360q-17 0-28.5-11.5T320-200q0-17 11.5-28.5T360-240Zm-160 40v-280h-68q-14 0-19-13t6-22l307-277q11-11 25.5-15.5T480-812q14 0 28.5 4.5T534-792l307 277q11 9 6 22t-19 13h-68v280q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-320H280v320q0 17-11.5 28.5T240-160q-17 0-28.5-11.5T200-200Zm280-532L332-600h296L480-732Zm0 132h148-296 148Z"/>
    </Icon>
  );
});

IconMaterialGarageDoor.displayName = 'AmauiIconMaterialGarageDoor';

export default IconMaterialGarageDoor;
