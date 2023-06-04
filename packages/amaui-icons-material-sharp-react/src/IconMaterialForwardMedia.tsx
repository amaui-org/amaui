import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardMedia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardMedia'

      short_name='ForwardMedia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120 616q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480 256h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896q117 0 198.5-81.5T760 616h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480 976Z"/>
    </Icon>
  );
});

IconMaterialForwardMedia.displayName = 'AmauiIconMaterialForwardMedia';

export default IconMaterialForwardMedia;
