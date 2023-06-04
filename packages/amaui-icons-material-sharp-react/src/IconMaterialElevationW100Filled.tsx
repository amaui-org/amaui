import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationW100Filled'

      short_name='Elevation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m167 842 183-256h200l222-259v515H167Zm-19-159-22-16 149-209h201l178-209 22 19-188 218H289L148 683Z"/>
    </Icon>
  );
});

IconMaterialElevationW100Filled.displayName = 'AmauiIconMaterialElevationW100Filled';

export default IconMaterialElevationW100Filled;
