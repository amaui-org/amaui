import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAlt'

      short_name='SwipeLeftAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><circle cx="15" cy="12" opacity=".3" r="3"/><path d="M10.1,13c0.46,2.28,2.48,4,4.9,4c2.76,0,5-2.24,5-5s-2.24-5-5-5c-2.42,0-4.44,1.72-4.9,4H5.83l1.59-1.59L6,8l-4,4l4,4 l1.41-1.41L5.83,13H10.1z M15,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S16.66,15,15,15z"/></g>
    </Icon>
  );
});

IconMaterialSwipeLeftAlt.displayName = 'AmauiIconMaterialSwipeLeftAlt';

export default IconMaterialSwipeLeftAlt;
