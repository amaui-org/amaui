import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareOffFilled'

      short_name='ShareOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 616q83 0 141.5 58.5T440 816q0 83-58.5 141.5T240 1016q-83 0-141.5-58.5T40 816q0-83 58.5-141.5T240 616Zm0 228 70 71 29-28-71-71 71-71-28-28-71 71-71-71-28 28 71 71-71 71 28 28 71-71Zm480-428q-23 0-44-8.5T638 384L356 548q1 4 1.5 7.5t1.5 7.5q-27-13-57-20t-62-7q-32 0-62 7t-57 20q5-45 38.5-76t80.5-31q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 560q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5l-87-50q-4-27-12.5-52T483 678l155 90q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialShareOffFilled.displayName = 'AmauiIconMaterialShareOffFilled';

export default IconMaterialShareOffFilled;
