import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUpAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUpAltW100'

      short_name='SwipeUpAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.35q-1.8 0-3.075-1.275Q7.65 16.8 7.65 15q0-1.725 1.138-2.938 1.137-1.212 2.862-1.387v-6.4L9.4 6.55l-.5-.525 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v6.4q1.725.175 2.863 1.387Q16.35 13.275 16.35 15q0 1.8-1.275 3.075Q13.8 19.35 12 19.35Zm0-.7q1.5 0 2.575-1.075Q15.65 16.5 15.65 15q0-1.5-1.075-2.575Q13.5 11.35 12 11.35q-1.5 0-2.575 1.075Q8.35 13.5 8.35 15q0 1.5 1.075 2.575Q10.5 18.65 12 18.65ZM12 15Z"/>
    </Icon>
  );
});

IconMaterialSwipeUpAltW100.displayName = 'AmauiIconMaterialSwipeUpAltW100';

export default IconMaterialSwipeUpAltW100;
