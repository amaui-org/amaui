import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompressSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressSharp'
      short_name='Compress'

      {...props}
    >
      <path d="M11 22V18.8L9.4 20.4L8 19L12 15L16 19L14.6 20.4L13 18.85V22ZM4 14V12H20V14ZM4 11V9H20V11ZM12 8 8 4 9.4 2.6 11 4.2V1H13V4.2L14.6 2.6L16 4Z"/>
    </Icon>
  );
});

IconMaterialCompressSharp.displayName = 'AmauiIconMaterialCompressSharp';

export default IconMaterialCompressSharp;
