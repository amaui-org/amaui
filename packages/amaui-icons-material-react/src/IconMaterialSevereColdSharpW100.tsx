import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSevereColdSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdSharpW100'
      short_name='SevereCold'

      {...props}
    >
      <path d="M20 9.35Q19.85 9.35 19.75 9.25Q19.65 9.15 19.65 9Q19.65 8.85 19.75 8.75Q19.85 8.65 20 8.65Q20.15 8.65 20.25 8.75Q20.35 8.85 20.35 9Q20.35 9.15 20.25 9.25Q20.15 9.35 20 9.35ZM10.65 21.35V16.825L7.4 20.075L6.925 19.6L10.65 15.875V13.35H8.125L4.4 17.075L3.925 16.6L7.175 13.35H2.65V12.65H7.175L3.925 9.4L4.4 8.925L8.125 12.65H10.65V10.125L6.925 6.4L7.4 5.925L10.65 9.175V4.65H11.35V9.175L14.6 5.925L15.075 6.4L11.35 10.125V12.65H19.35V13.35H14.825L18.075 16.6L17.6 17.075L13.875 13.35H11.35V15.875L15.075 19.6L14.6 20.075L11.35 16.825V21.35ZM19.65 6.65V2.65H20.35V6.65Z"/>
    </Icon>
  );
});

IconMaterialSevereColdSharpW100.displayName = 'AmauiIconMaterialSevereColdSharpW100';

export default IconMaterialSevereColdSharpW100;
