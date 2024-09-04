import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnRightFilled'

      short_name='AddColumnRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-360q-17 0-28.5-11.5T720-400v-40h-40q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520h40v-40q0-17 11.5-28.5T760-600q17 0 28.5 11.5T800-560v40h40q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v40q0 17-11.5 28.5T760-360ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h240v720H160Zm320 0v-720h240q33 0 56.5 23.5T800-760v44q0 16-12 26.5t-28 9.5q-83 0-141.5 58T560-480q0 84 58.5 142T760-280q16 0 28 10t12 26v44q0 33-23.5 56.5T720-120H480Z"/>
    </Icon>
  );
});

IconMaterialAddColumnRightFilled.displayName = 'AmauiIconMaterialAddColumnRightFilled';

export default IconMaterialAddColumnRightFilled;
