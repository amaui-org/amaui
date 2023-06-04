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
      <path d="M12 20q-2.075 0-3.537-1.462Q7 17.075 7 15q0-1.825 1.137-3.188Q9.275 10.45 11 10.1V5.825L9.4 7.4 8 6l4-4 4 4-1.4 1.425-1.6-1.6V10.1q1.725.35 2.863 1.712Q17 13.175 17 15q0 2.075-1.462 3.538Q14.075 20 12 20Zm0-2q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAlt.displayName = 'AmauiIconMaterialSwipeUpAlt';

export default IconMaterialSwipeUpAlt;
