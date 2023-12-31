import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionSlideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionSlideW100'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h190v536H92Zm28-27h134v-482H120v482Zm262 27v-536h486v536H382Zm28-27h430v-482H410v482Zm-156 0v-482 482Zm156 0v-482 482Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlideW100.displayName = 'AmauiIconMaterialTransitionSlideW100';

export default IconMaterialTransitionSlideW100;
