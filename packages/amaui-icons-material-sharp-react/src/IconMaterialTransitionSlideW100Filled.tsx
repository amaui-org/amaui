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
      <path d="M92-212v-536h190v536H92Zm290 0v-536h486v536H382Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlideW100Filled.displayName = 'AmauiIconMaterialTransitionSlideW100Filled';

export default IconMaterialTransitionSlideW100Filled;
