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
      <path d="M9 17q-2.075 0-3.537-1.463Q4 14.075 4 12t1.463-3.538Q6.925 7 9 7q1.825 0 3.188 1.137Q13.55 9.275 13.9 11h4.275l-.9-.9Q17 9.825 17 9.412q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.275-.413 0-.713-.275-.3-.3-.3-.713 0-.412.3-.712l.875-.875H13.9q-.35 1.725-1.712 2.863Q10.825 17 9 17Zm0-2q1.25 0 2.125-.875T12 12q0-1.25-.875-2.125T9 9q-1.25 0-2.125.875T6 12q0 1.25.875 2.125T9 15Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAlt.displayName = 'AmauiIconMaterialSwipeRightAlt';

export default IconMaterialSwipeRightAlt;
