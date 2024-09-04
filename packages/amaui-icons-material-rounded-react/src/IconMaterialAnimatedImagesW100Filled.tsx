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
      <path d="m553-491 94-64q13-9 13-25t-13-25l-94-64q-15-11-31-2t-16 27v128q0 18 16 27t31-2ZM352-308q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H352Zm-99 168q-25 3-44.5-12T186-192l-48-374q-3-25 12.5-45t40.5-23l21-2v300q0 45 31.5 76.5T320-228h414q2 11-5.5 19.5T710-198l-457 58Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesW100Filled.displayName = 'AmauiIconMaterialAnimatedImagesW100Filled';

export default IconMaterialAnimatedImagesW100Filled;
