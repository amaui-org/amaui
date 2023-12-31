import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionSlide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionSlide'

      short_name='TransitionSlide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h240v640H40Zm80-79h80v-482h-80v482Zm240 79v-640h560v640H360Zm80-79h400v-482H440v482Zm-240 0v-482 482Zm240 0v-482 482Z"/>
    </Icon>
  );
});

IconMaterialTransitionSlide.displayName = 'AmauiIconMaterialTransitionSlide';

export default IconMaterialTransitionSlide;
