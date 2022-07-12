import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeightOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightOutlinedW700'
      short_name='Height'

      {...props}
    >
      <path d="M12 21.8 6.8 16.625 9.025 14.4 10.425 15.825V8.175L9.025 9.6L6.8 7.375L12 2.2L17.2 7.375L14.975 9.6L13.575 8.175V15.825L14.975 14.4L17.2 16.625Z"/>
    </Icon>
  )
});

export default IconMaterialHeightOutlinedW700;
