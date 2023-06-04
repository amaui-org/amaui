import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop54 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54'

      short_name='Crop54'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,4H5C3.9,4,3,4.9,3,6v12c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,18H5V6h14V18z"/></g></g></g>
    </Icon>
  );
});

IconMaterialCrop54.displayName = 'AmauiIconMaterialCrop54';

export default IconMaterialCrop54;
