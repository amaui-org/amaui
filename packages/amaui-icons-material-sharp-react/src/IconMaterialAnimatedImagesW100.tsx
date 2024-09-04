import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnimatedImagesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimatedImagesW100'

      short_name='AnimatedImages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m506-459 177-121-177-121v242Zm218 231h10l3 27-543 69-64-496 82-8v28l-48 6 54 438 506-64Zm-432-80v-536h536v536H292Zm28-28h480v-480H320v480ZM218-164Zm342-412Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesW100.displayName = 'AmauiIconMaterialAnimatedImagesW100';

export default IconMaterialAnimatedImagesW100;
