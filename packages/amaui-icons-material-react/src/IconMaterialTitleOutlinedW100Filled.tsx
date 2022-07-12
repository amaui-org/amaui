import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleOutlinedW100Filled'
      short_name='Title'

      {...props}
    >
      <path d="M11.65 18.85V5.85H6.15V5.15H17.85V5.85H12.35V18.85Z"/>
    </Icon>
  )
});

export default IconMaterialTitleOutlinedW100Filled;
