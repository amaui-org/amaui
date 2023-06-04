import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropFreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeFilled'

      short_name='CropFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9V3h6v2H5v4Zm6 12H3v-6h2v4h4Zm6 0v-2h4v-4h2v6Zm4-12V5h-4V3h6v6Z"/>
    </Icon>
  );
});

IconMaterialCropFreeFilled.displayName = 'AmauiIconMaterialCropFreeFilled';

export default IconMaterialCropFreeFilled;
