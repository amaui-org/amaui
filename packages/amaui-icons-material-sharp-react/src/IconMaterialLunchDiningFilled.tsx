import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLunchDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningFilled'

      short_name='LunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 10V9q0-2.875 2.713-4.438Q7.425 3 12 3q4.575 0 7.288 1.562Q22 6.125 22 9v1Zm0 4.5v-2q.9 0 1.425-.5t1.925-.5q1.4 0 1.9.5t1.4.5q.9 0 1.425-.5T12 11.5q1.4 0 1.925.5.525.5 1.425.5t1.4-.5q.5-.5 1.9-.5t1.975.5q.575.5 1.375.5v2q-1.4 0-1.875-.5-.475-.5-1.375-.5t-1.45.5q-.55.5-1.95.5t-1.925-.5q-.525-.5-1.425-.5t-1.425.5q-.525.5-1.925.5t-1.9-.5q-.5-.5-1.4-.5-.9 0-1.425.5T2 14.5ZM2 21v-5h20v5Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningFilled.displayName = 'AmauiIconMaterialLunchDiningFilled';

export default IconMaterialLunchDiningFilled;
