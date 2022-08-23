import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedRoundedW100Filled'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M19.75 20.75 18.7 19.7H5.8Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.3L3.25 4.25Q3.125 4.125 3.125 4Q3.125 3.875 3.25 3.75Q3.375 3.625 3.5 3.625Q3.625 3.625 3.75 3.75L20.25 20.25Q20.35 20.35 20.35 20.488Q20.35 20.625 20.25 20.75Q20.125 20.875 20 20.875Q19.875 20.875 19.75 20.75ZM8.1 16.35H15.35L12.725 13.75L11.5 15.4L9.975 13.625Q9.85 13.475 9.663 13.488Q9.475 13.5 9.35 13.65L7.775 15.7Q7.625 15.9 7.738 16.125Q7.85 16.35 8.1 16.35ZM19.7 16.875 7.125 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedRoundedW100Filled.displayName = 'AmauiIconMaterialImageNotSupportedRoundedW100Filled';

export default IconMaterialImageNotSupportedRoundedW100Filled;
