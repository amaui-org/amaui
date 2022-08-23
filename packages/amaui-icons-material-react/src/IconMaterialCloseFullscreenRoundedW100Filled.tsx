import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenRoundedW100Filled'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M12.75 12Q12.425 12 12.213 11.787Q12 11.575 12 11.25V5.65Q12 5.5 12.1 5.4Q12.2 5.3 12.35 5.3Q12.5 5.3 12.6 5.4Q12.7 5.5 12.7 5.65V10.825L19.7 3.8Q19.8 3.7 19.95 3.7Q20.1 3.7 20.2 3.8Q20.3 3.9 20.3 4.05Q20.3 4.2 20.2 4.3L13.175 11.3H18.35Q18.5 11.3 18.6 11.4Q18.7 11.5 18.7 11.65Q18.7 11.8 18.6 11.9Q18.5 12 18.35 12ZM3.8 20.2Q3.7 20.1 3.7 19.95Q3.7 19.8 3.8 19.7L10.825 12.7H5.65Q5.5 12.7 5.4 12.6Q5.3 12.5 5.3 12.35Q5.3 12.2 5.4 12.1Q5.5 12 5.65 12H11.25Q11.575 12 11.788 12.212Q12 12.425 12 12.75V18.35Q12 18.5 11.9 18.6Q11.8 18.7 11.65 18.7Q11.5 18.7 11.4 18.6Q11.3 18.5 11.3 18.35V13.175L4.3 20.2Q4.2 20.3 4.05 20.3Q3.9 20.3 3.8 20.2Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenRoundedW100Filled.displayName = 'AmauiIconMaterialCloseFullscreenRoundedW100Filled';

export default IconMaterialCloseFullscreenRoundedW100Filled;
