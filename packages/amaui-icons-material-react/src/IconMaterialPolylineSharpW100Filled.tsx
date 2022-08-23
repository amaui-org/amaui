import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineSharpW100Filled'
      short_name='Polyline'

      {...props}
    >
      <path d="M15.65 21.35V19.1L8.15 15.35H3.65V10.65H7.6L10.65 7.15V2.65H15.35V7.35H11.4L8.35 10.85V14.65L15.65 18.3V16.65H20.35V21.35Z"/>
    </Icon>
  );
});

IconMaterialPolylineSharpW100Filled.displayName = 'AmauiIconMaterialPolylineSharpW100Filled';

export default IconMaterialPolylineSharpW100Filled;
