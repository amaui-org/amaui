import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFmdBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadW100'

      short_name='FmdBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 12.525h.7v-5.9h-.7Zm.35 2.65q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 5.35q3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762 0-3.025-1.925-4.938Q14.8 3.35 12 3.35T7.275 5.262Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563Zm0 .975q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Zm0-11.3Z"/>
    </Icon>
  );
});

IconMaterialFmdBadW100.displayName = 'AmauiIconMaterialFmdBadW100';

export default IconMaterialFmdBadW100;
