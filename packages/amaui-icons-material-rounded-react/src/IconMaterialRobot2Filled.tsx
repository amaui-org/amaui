import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRobot2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot2Filled'

      short_name='Robot2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-17 0-28.5-11.5T160-160v-160q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v160q0 17-11.5 28.5T760-120H200Zm160-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360Zm0-160q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600Z"/>
    </Icon>
  );
});

IconMaterialRobot2Filled.displayName = 'AmauiIconMaterialRobot2Filled';

export default IconMaterialRobot2Filled;
