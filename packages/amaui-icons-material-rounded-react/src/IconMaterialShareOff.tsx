import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareOff'

      short_name='ShareOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 336q17 0 28.5-11.5T760 296q0-17-11.5-28.5T720 256q-17 0-28.5 11.5T680 296q0 17 11.5 28.5T720 336Zm0 560q17 0 28.5-11.5T760 856q0-17-11.5-28.5T720 816q-17 0-28.5 11.5T680 856q0 17 11.5 28.5T720 896Zm0-600Zm0 560Zm-480 160q-83 0-141.5-58.5T40 816q0-83 58.5-141.5T240 616q83 0 141.5 58.5T440 816q0 83-58.5 141.5T240 1016ZM121 563q5-45 38.5-76t80.5-31q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638 384L356 548q1 4 1.5 7.5t1.5 7.5q-27-13-57-20t-62-7q-32 0-62 7t-57 20Zm599 413q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5l-87-50q-4-27-12.5-52T483 678l155 90q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35ZM240 844l56 57q6 6 14 6t14-6q6-6 6-14.5t-6-14.5l-56-56 57-57q6-6 6-14t-6-14q-6-6-14-6t-14 6l-57 57-57-57q-6-6-14-6t-14 6q-6 6-6 14t6 14l57 57-57 57q-6 6-6 14t6 14q6 6 14 6t14-6l57-57Z"/>
    </Icon>
  );
});

IconMaterialShareOff.displayName = 'AmauiIconMaterialShareOff';

export default IconMaterialShareOff;
