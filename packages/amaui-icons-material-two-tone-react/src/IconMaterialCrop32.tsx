import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M19,6H5C3.9,6,3,6.9,3,8v8c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8C21,6.9,20.1,6,19,6z M19,16H5V8h14V16z"/></g></g></g>
    </Icon>
  );
});

IconMaterialCrop32.displayName = 'AmauiIconMaterialCrop32';

export default IconMaterialCrop32;
