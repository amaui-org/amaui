import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleOutlinedW700'
      short_name='Title'

      {...props}
    >
      <path d="M9.925 20.775V7.375H4.425V3.225H19.575V7.375H14.075V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialTitleOutlinedW700;
