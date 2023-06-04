import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFilterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterFilled'

      short_name='PhotoFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h11v2H5v14h14v-9h2v11Zm9-5-1.25-2.75L8 12l2.75-1.25L12 8l1.25 2.75L16 12l-2.75 1.25Zm5-6-.95-2.05L14 7l2.05-.95L17 4l.95 2.05L20 7l-2.05.95Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterFilled.displayName = 'AmauiIconMaterialPhotoFilterFilled';

export default IconMaterialPhotoFilterFilled;
