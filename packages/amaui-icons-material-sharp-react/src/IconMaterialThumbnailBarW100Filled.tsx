import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100Filled'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844h188V308H132v536Zm216 0h480V308H348v536Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100Filled.displayName = 'AmauiIconMaterialThumbnailBarW100Filled';

export default IconMaterialThumbnailBarW100Filled;
