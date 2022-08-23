import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFenceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceSharpFilled'
      short_name='Fence'

      {...props}
    >
      <path d="M5 20V16H3V14H5V12H3V10H5V7L8 4L10 6L12.025 4L14.025 6L16.025 4L19.025 7V10H21V12H19.025V14H21V16H19.025V20ZM7 10H9V7.825L8 6.825L7 7.825ZM11 10H13V7.825L12 6.825L11 7.825ZM15.025 10H17V7.825L16 6.825L15.025 7.8ZM7 14H9V12H7ZM11 14H13V12H11ZM15.025 14H17V12H15.025ZM7 18H9V16H7ZM11 18H13V16H11ZM15.025 18H17V16H15.025Z"/>
    </Icon>
  );
});

IconMaterialFenceSharpFilled.displayName = 'AmauiIconMaterialFenceSharpFilled';

export default IconMaterialFenceSharpFilled;
