import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTheatersSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersSharpW100'
      short_name='Theaters'

      {...props}
    >
      <path d="M4.65 20.35V3.65H5.35V5.65H8.65V3.65H15.35V5.65H18.65V3.65H19.35V20.35H18.65V18.35H15.35V20.35H8.65V18.35H5.35V20.35ZM5.35 17.65H8.65V14.35H5.35ZM5.35 13.65H8.65V10.35H5.35ZM5.35 9.65H8.65V6.35H5.35ZM15.35 17.65H18.65V14.35H15.35ZM15.35 13.65H18.65V10.35H15.35ZM15.35 9.65H18.65V6.35H15.35ZM9.35 19.65H14.65V4.35H9.35ZM9.35 4.35H14.65Z"/>
    </Icon>
  );
});

IconMaterialTheatersSharpW100.displayName = 'AmauiIconMaterialTheatersSharpW100';

export default IconMaterialTheatersSharpW100;
