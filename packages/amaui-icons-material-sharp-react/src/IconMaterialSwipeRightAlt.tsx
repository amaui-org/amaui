import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAlt'

      short_name='SwipeRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17q-2.075 0-3.537-1.463Q4 14.075 4 12t1.463-3.538Q6.925 7 9 7q1.825 0 3.188 1.137Q13.55 9.275 13.9 11h4.275L16.6 9.4 18 8l4 4-4 4-1.425-1.4 1.6-1.6H13.9q-.35 1.725-1.712 2.863Q10.825 17 9 17Zm0-2q1.25 0 2.125-.875T12 12q0-1.25-.875-2.125T9 9q-1.25 0-2.125.875T6 12q0 1.25.875 2.125T9 15Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAlt.displayName = 'AmauiIconMaterialSwipeRightAlt';

export default IconMaterialSwipeRightAlt;
