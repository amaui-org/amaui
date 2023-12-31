import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionChopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionChopFilled'

      short_name='TransitionChop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm95-80h545v-480H627l73 283q8 32-8.5 60.5T643-340L255-240Z"/>
    </Icon>
  );
});

IconMaterialTransitionChopFilled.displayName = 'AmauiIconMaterialTransitionChopFilled';

export default IconMaterialTransitionChopFilled;
