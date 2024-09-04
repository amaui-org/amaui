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
      <path d="m553-491 94-64q13-9 13-25t-13-25l-94-64q-15-11-31-2t-16 27v128q0 18 16 27t31-2ZM352-308q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H352Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm208-240ZM253-140q-25 3-44.5-12T186-192l-48-374q-3-25 12.5-45t40.5-23l6-1q6-1 10.5 3.5T212-620q0 5-3.5 9t-8.5 5h-4q-14 2-22 12t-6 24l46 374q2 14 12 22t24 6l470-59q6-1 10.5 2.5t5.5 9.5q1 6-2.5 10t-9.5 5l-471 60Zm-35-24Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesW100.displayName = 'AmauiIconMaterialAnimatedImagesW100';

export default IconMaterialAnimatedImagesW100;
