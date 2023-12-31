import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionChopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionChopW100Filled'

      short_name='TransitionChop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm42-28h626v-480H600l89 344-515 136Z"/>
    </Icon>
  );
});

IconMaterialTransitionChopW100Filled.displayName = 'AmauiIconMaterialTransitionChopW100Filled';

export default IconMaterialTransitionChopW100Filled;
