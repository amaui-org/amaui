import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCelebrationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationFilled'

      short_name='Celebration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 7 8l9 9Zm12.55-9.45L13.5 11.5l7.525-7.525L23.55 6.5 22.5 7.55l-1.475-1.475Zm-4-4L9.5 7.5l1.45-1.45-1.5-1.5L10.5 3.5l2.55 2.55Zm2 2L11.5 9.5l4.475-4.475L13.5 2.55l1.05-1.05 3.525 3.525Zm4 4L15.5 13.5l3.525-3.525L22.55 13.5l-1.05 1.05-2.475-2.475Z"/>
    </Icon>
  );
});

IconMaterialCelebrationFilled.displayName = 'AmauiIconMaterialCelebrationFilled';

export default IconMaterialCelebrationFilled;
