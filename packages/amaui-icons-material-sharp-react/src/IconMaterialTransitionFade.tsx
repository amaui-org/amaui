import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionFade = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionFade'

      short_name='TransitionFade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h280v720H120Zm320-640v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-240 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTransitionFade.displayName = 'AmauiIconMaterialTransitionFade';

export default IconMaterialTransitionFade;
