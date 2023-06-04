import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,7H5C3.9,7,3,7.9,3,9v6c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9C21,7.9,20.1,7,19,7z M19,15H5V9h14V15z"/></g></g></g>
    </Icon>
  );
});

IconMaterialCrop169.displayName = 'AmauiIconMaterialCrop169';

export default IconMaterialCrop169;
