import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedback = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Feedback'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-800h800v640H240L80-80Zm80-240h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFeedback.displayName = 'AmauiIconMaterialFeedback';

export default IconMaterialFeedback;
