import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbnailBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbnailBarW100'

      short_name='ThumbnailBar'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm216-28h452V336H348v480Zm-28 0V336H160v480h160Zm-160 0V336v480Zm160 0h28-28Zm0-480h28-28Z"/>
    </Icon>
  );
});

IconMaterialThumbnailBarW100.displayName = 'AmauiIconMaterialThumbnailBarW100';

export default IconMaterialThumbnailBarW100;
