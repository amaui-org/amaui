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
      <path d="M80-160v-640h800v640H80Zm175-80h545v-480H627l93 360-465 120Z"/>
    </Icon>
  );
});

IconMaterialTransitionChopFilled.displayName = 'AmauiIconMaterialTransitionChopFilled';

export default IconMaterialTransitionChopFilled;
