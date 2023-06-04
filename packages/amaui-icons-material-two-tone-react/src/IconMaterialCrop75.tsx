import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,5H5C3.9,5,3,5.9,3,7v10c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V7C21,5.9,20.1,5,19,5z M19,17H5V7h14V17z"/></g></g></g>
    </Icon>
  );
});

IconMaterialCrop75.displayName = 'AmauiIconMaterialCrop75';

export default IconMaterialCrop75;
