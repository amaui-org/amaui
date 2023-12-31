import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionChopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionChopW100'

      short_name='TransitionChop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-53 495-131-84-324H160v455Zm14 25h626v-480H600l89 344-515 136Zm-14-480Z"/>
    </Icon>
  );
});

IconMaterialTransitionChopW100.displayName = 'AmauiIconMaterialTransitionChopW100';

export default IconMaterialTransitionChopW100;
