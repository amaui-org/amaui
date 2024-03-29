import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAlt'

      short_name='SwipeUpAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-2.075 0-3.537-1.462Q7 17.075 7 15q0-1.825 1.137-3.188Q9.275 10.45 11 10.1V5.825l-.9.9Q9.825 7 9.413 7 9 7 8.7 6.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.687 0 .413-.275.713-.3.3-.712.3-.413 0-.713-.3L13 5.825V10.1q1.725.35 2.863 1.712Q17 13.175 17 15q0 2.075-1.462 3.538Q14.075 20 12 20Zm0-2q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAlt.displayName = 'AmauiIconMaterialSwipeUpAlt';

export default IconMaterialSwipeUpAlt;
