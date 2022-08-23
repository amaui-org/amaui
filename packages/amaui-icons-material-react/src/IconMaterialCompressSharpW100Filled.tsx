import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompressSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressSharpW100Filled'
      short_name='Compress'

      {...props}
    >
      <path d="M11.65 21.5V17.1L9.4 19.35L8.9 18.85L12 15.75L15.1 18.85L14.6 19.35L12.35 17.1V21.5ZM4.65 13.2V12.5H19.35V13.2ZM4.65 10.5V9.8H19.35V10.5ZM12 7.25 8.9 4.15 9.4 3.65 11.65 5.9V1.5H12.35V5.9L14.6 3.65L15.1 4.15Z"/>
    </Icon>
  );
});

IconMaterialCompressSharpW100Filled.displayName = 'AmauiIconMaterialCompressSharpW100Filled';

export default IconMaterialCompressSharpW100Filled;
