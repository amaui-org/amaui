import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineSharpW100'
      short_name='Polyline'

      {...props}
    >
      <path d="M15.65 21.35V19.1L8.15 15.35H3.65V10.65H7.6L10.65 7.15V2.65H15.35V7.35H11.4L8.35 10.85V14.65L15.65 18.3V16.65H20.35V21.35ZM11.35 6.65H14.65V3.35H11.35ZM4.35 14.65H7.65V11.35H4.35ZM16.35 20.65H19.65V17.35H16.35ZM13 5ZM6 13ZM18 19Z"/>
    </Icon>
  );
});

IconMaterialPolylineSharpW100.displayName = 'AmauiIconMaterialPolylineSharpW100';

export default IconMaterialPolylineSharpW100;
