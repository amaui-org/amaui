import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDown'

      short_name='SwipeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 15 1 11.5l1.05-1.05L3.8 12.2q-.15-.65-.225-1.325Q3.5 10.2 3.5 9.5q0-2.15.688-4.05.687-1.9 1.937-3.45L7.2 3.075Q6.15 4.425 5.575 6.05T5 9.5q0 .65.088 1.3.087.65.237 1.275L6.95 10.45 8 11.5Zm11.15 7.175-7.6-2.925 1.075-2.95 2.9-.575L8.7 8.3q-.425-.95-.05-1.913Q9.025 5.425 9.975 5q.95-.425 1.913-.062.962.362 1.387 1.312l1.75 3.925.725-.3 5.9.2 2.2 8.45ZM15.625 20l5.825-2.6-1.35-5.375-4.625-.175-1.575.7-2.45-5.475q-.1-.2-.287-.275-.188-.075-.388.025T10.5 7.1q-.075.175.025.375l4.325 9.675-4.25.925Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeDown.displayName = 'AmauiIconMaterialSwipeDown';

export default IconMaterialSwipeDown;
