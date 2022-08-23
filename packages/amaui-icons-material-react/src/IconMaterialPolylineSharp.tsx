import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineSharp'
      short_name='Polyline'

      {...props}
    >
      <path d="M15 22V19.5L8 16H3V10H7.3L10 6.9V2H16V8H11.7L9 11.1V14.25L15 17.25V16H21V22ZM12 6H14V4H12ZM5 14H7V12H5ZM17 20H19V18H17ZM13 5ZM6 13ZM18 19Z"/>
    </Icon>
  );
});

IconMaterialPolylineSharp.displayName = 'AmauiIconMaterialPolylineSharp';

export default IconMaterialPolylineSharp;
