import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg1Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1Sharp'
      short_name='ExposureNeg1'

      {...props}
    >
      <path d="M10 14H3V12H10ZM15.75 19V8.05L13.45 9.7L12.3 7.95L16.4 5H18V19Z"/>
    </Icon>
  );
});

export default IconMaterialExposureNeg1Sharp;
