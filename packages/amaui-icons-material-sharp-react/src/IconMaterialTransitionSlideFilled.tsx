import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionSlideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionSlideFilled'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h240v640H40Zm320 0v-640h560v640H360Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlideFilled.displayName = 'AmauiIconMaterialTransitionSlideFilled';

export default IconMaterialTransitionSlideFilled;
