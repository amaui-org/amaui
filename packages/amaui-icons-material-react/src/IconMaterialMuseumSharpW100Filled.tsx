import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumSharpW100Filled'
      short_name='Museum'

      {...props}
    >
      <path d="M3.3 20.7V20H5.3V9.7H3.3L12 3.6L20.7 9.7H18.7V20H20.7V20.7ZM8.8 17.35H9.5V12.7L12 16.4L14.5 12.7V17.35H15.2V11.65H14.35L12 15.15L9.65 11.65H8.8Z"/>
    </Icon>
  );
});

IconMaterialMuseumSharpW100Filled.displayName = 'AmauiIconMaterialMuseumSharpW100Filled';

export default IconMaterialMuseumSharpW100Filled;
