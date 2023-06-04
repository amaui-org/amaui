import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarFilled'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896h240V256H80v640Zm320 0h480V256H400v640Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarFilled.displayName = 'AmauiIconMaterialThumbnailBarFilled';

export default IconMaterialThumbnailBarFilled;
