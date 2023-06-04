import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCelebrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationW100Filled'

      short_name='Celebration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.075 19.85 3.4-9.5 6.1 6.1Zm9-6.9-.5-.5 6.95-6.95 1.95 1.95-.45.5-1.475-1.475Zm-3.1-3.1-.5-.5 2.05-2.05-2.05-2.05.5-.5 2.55 2.55Zm1.55 1.55-.5-.5L15.5 6.425 13.025 3.95l.5-.5L16.5 6.425Zm3.1 3.1-.5-.5 2.55-2.55 2.55 2.55-.5.5-2.05-2.05Z"/>
    </Icon>
  );
});

IconMaterialCelebrationW100Filled.displayName = 'AmauiIconMaterialCelebrationW100Filled';

export default IconMaterialCelebrationW100Filled;
