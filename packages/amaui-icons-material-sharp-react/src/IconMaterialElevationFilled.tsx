import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationFilled'

      short_name='Elevation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m82 936 258-360h202l298-348v708H82Zm70-233-64-46 172-241h202l188-219 60 52-212 247H300L152 703Z"/>
    </Icon>
  );
});

IconMaterialElevationFilled.displayName = 'AmauiIconMaterialElevationFilled';

export default IconMaterialElevationFilled;
