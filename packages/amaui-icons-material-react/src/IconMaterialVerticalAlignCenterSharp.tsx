import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterSharp'
      short_name='VerticalAlignCenter'

      {...props}
    >
      <path d="M11 22V17.8L9.4 19.4L8 18L12 14L16 18L14.6 19.4L13 17.8V22ZM4 13V11H20V13ZM12 10 8 6 9.4 4.6 11 6.2V2H13V6.2L14.6 4.6L16 6Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterSharp.displayName = 'AmauiIconMaterialVerticalAlignCenterSharp';

export default IconMaterialVerticalAlignCenterSharp;
