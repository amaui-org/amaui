import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionSlideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionSlideW100Filled'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h70q26 0 43 17t17 43v416q0 26-17 43t-43 17h-70Zm290 0q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h366q26 0 43 17t17 43v416q0 26-17 43t-43 17H442Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlideW100Filled.displayName = 'AmauiIconMaterialTransitionSlideW100Filled';

export default IconMaterialTransitionSlideW100Filled;
