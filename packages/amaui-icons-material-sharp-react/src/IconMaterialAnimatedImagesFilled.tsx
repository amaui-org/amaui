import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnimatedImagesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimatedImagesFilled'

      short_name='AnimatedImages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-420 240-160-240-160v320ZM281-280v-600h600v600H281ZM150-75 76-672l125-14v486h531l7 53-589 72Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesFilled.displayName = 'AmauiIconMaterialAnimatedImagesFilled';

export default IconMaterialAnimatedImagesFilled;
