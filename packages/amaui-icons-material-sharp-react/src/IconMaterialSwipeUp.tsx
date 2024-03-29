import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeUp'

      short_name='SwipeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.125 14q-1.25-1.55-1.937-3.45Q3.5 8.65 3.5 6.5q0-.7.075-1.363.075-.662.225-1.312L2.05 5.55 1 4.5 4.5 1 8 4.5 6.95 5.55l-1.625-1.6q-.15.625-.237 1.262Q5 5.85 5 6.5q0 1.825.575 3.45.575 1.625 1.625 2.975Zm9.525 8.15-7.6-2.925 1.075-2.95 2.9-.575L8.7 8.275q-.425-.95-.05-1.913.375-.962 1.325-1.387.95-.425 1.913-.063.962.363 1.387 1.313l1.75 3.925.725-.3 5.9.2 2.2 8.45Zm-.025-2.175 5.825-2.6L20.1 12l-4.625-.175-1.575.7-2.45-5.475q-.1-.2-.287-.275-.188-.075-.388.025t-.275.275q-.075.175.025.375l4.325 9.675-4.25.925Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeUp.displayName = 'AmauiIconMaterialSwipeUp';

export default IconMaterialSwipeUp;
