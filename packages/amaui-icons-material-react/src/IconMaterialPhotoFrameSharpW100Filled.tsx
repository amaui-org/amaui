import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFrameSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameSharpW100Filled'
      short_name='PhotoFrame'

      {...props}
    >
      <path d="M6.825 14.35H17.2L14 10.075L11 13.925L9.025 11.525ZM5.55 18.95Q5.225 18.95 5.013 18.737Q4.8 18.525 4.8 18.2V17.7H3.8Q3.15 17.7 2.725 17.275Q2.3 16.85 2.3 16.2V6.8Q2.3 6.15 2.725 5.725Q3.15 5.3 3.8 5.3H20.2Q20.85 5.3 21.275 5.725Q21.7 6.15 21.7 6.8V16.2Q21.7 16.85 21.275 17.275Q20.85 17.7 20.2 17.7H19.2V18.2Q19.2 18.525 18.988 18.737Q18.775 18.95 18.45 18.95Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameSharpW100Filled.displayName = 'AmauiIconMaterialPhotoFrameSharpW100Filled';

export default IconMaterialPhotoFrameSharpW100Filled;
