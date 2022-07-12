import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceOutlinedW100Filled'
      short_name='Backspace'

      {...props}
    >
      <path d="M10.95 15.1 13.55 12.5 16.15 15.1 16.65 14.6 14.05 12 16.65 9.4 16.15 8.9 13.55 11.5 10.95 8.9 10.45 9.4 13.05 12 10.45 14.6ZM4.45 12 7.8 7.25Q8.125 6.8 8.613 6.55Q9.1 6.3 9.65 6.3H18.05Q18.675 6.3 19.113 6.738Q19.55 7.175 19.55 7.8V16.2Q19.55 16.825 19.113 17.262Q18.675 17.7 18.05 17.7H9.65Q9.075 17.7 8.613 17.425Q8.15 17.15 7.8 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialBackspaceOutlinedW100Filled;
