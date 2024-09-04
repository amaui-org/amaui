import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnimatedImagesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimatedImagesW100Filled'

      short_name='AnimatedImages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m506-459 177-121-177-121v242ZM292-308v-536h536v536H292Zm-98 176-64-496 82-8v408h522l3 27-543 69Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesW100Filled.displayName = 'AmauiIconMaterialAnimatedImagesW100Filled';

export default IconMaterialAnimatedImagesW100Filled;
