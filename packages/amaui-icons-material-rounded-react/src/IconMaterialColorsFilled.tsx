import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorsFilled'

      short_name='Colors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-140 100-386q-10-10-15-22t-5-25q0-13 5-25t15-22l230-229-75-75q-13-13-13.5-31t12.5-32q13-14 32-14t33 14l367 367q10 10 14.5 22t4.5 25q0 13-4.5 25T686-386L440-140q-10 10-22 15t-25 5q-13 0-25-5t-22-15Zm47-506L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l19-24q9-11 23.5-11.5T816-331l20 25q16 23 30 47t14 51q0 37-26 62.5T792-120Z"/>
    </Icon>
  );
});

IconMaterialColorsFilled.displayName = 'AmauiIconMaterialColorsFilled';

export default IconMaterialColorsFilled;
