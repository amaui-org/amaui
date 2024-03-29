import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeVertical'

      short_name='SwipeVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 22v-1.5h2.025Q1.6 18.75.8 16.587 0 14.425 0 12t.8-4.588Q1.6 5.25 3.025 3.5H1V2h5v5H4.5V4.1Q3.1 5.675 2.3 7.7q-.8 2.025-.8 4.3t.8 4.288Q3.1 18.3 4.5 19.9V17H6v5Zm14.65.15-7.6-2.925 1.075-2.95 2.9-.575L8.7 8.275q-.425-.95-.05-1.913.375-.962 1.325-1.387.95-.425 1.913-.063.962.363 1.387 1.313l1.75 3.925.725-.3 5.9.2 2.2 8.45Zm-.025-2.175 5.825-2.6L20.1 12l-4.625-.175-1.575.7-2.45-5.475q-.1-.2-.287-.275-.188-.075-.388.025t-.275.275q-.075.175.025.375l4.325 9.675-4.25.925Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSwipeVertical.displayName = 'AmauiIconMaterialSwipeVertical';

export default IconMaterialSwipeVertical;
