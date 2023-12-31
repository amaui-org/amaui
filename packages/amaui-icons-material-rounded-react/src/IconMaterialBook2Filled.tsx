import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2Filled'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h420q33 0 56.5 23.5T800-800v501q0 8-6.5 14.5T770-270q-14 7-22 20t-8 30q0 17 8 30.5t22 19.5q14 6 22 16.5t8 22.5v10q0 17-11.5 29T760-80H300Zm60-280q17 0 28.5-11.5T400-400v-360q0-17-11.5-28.5T360-800q-17 0-28.5 11.5T320-760v360q0 17 11.5 28.5T360-360Zm-60 200h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialBook2Filled.displayName = 'AmauiIconMaterialBook2Filled';

export default IconMaterialBook2Filled;
