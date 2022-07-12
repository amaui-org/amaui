import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleaningServicesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesSharp'
      short_name='CleaningServices'

      {...props}
    >
      <path d="M3 23V11H9V1H15V11H21V23ZM5 21H7V17H9V21H11V17H13V21H15V17H17V21H19V13H5Z"/>
    </Icon>
  )
});

export default IconMaterialCleaningServicesSharp;
