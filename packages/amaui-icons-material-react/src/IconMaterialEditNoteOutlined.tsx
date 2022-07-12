import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNoteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteOutlined'
      short_name='EditNote'

      {...props}
    >
      <path d="M20.125 15 18 12.875 18.725 12.15Q19 11.875 19.425 11.875Q19.85 11.875 20.125 12.15L20.85 12.875Q21.125 13.15 21.125 13.575Q21.125 14 20.85 14.275ZM12 21V18.875L17.3 13.575L19.425 15.7L14.125 21ZM3 16V14H10V16ZM3 12V10H14V12ZM3 8V6H14V8Z"/>
    </Icon>
  )
});

export default IconMaterialEditNoteOutlined;
