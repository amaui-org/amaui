import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationW100'

      short_name='Elevation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m167 842 183-256h200l222-259v515H167Zm-19-159-22-16 149-209h201l178-209 22 19-188 218H289L148 683Zm74 131h522V402L562 614H364L222 814Zm522 0Z"/>
    </Icon>
  );
});

IconMaterialElevationW100.displayName = 'AmauiIconMaterialElevationW100';

export default IconMaterialElevationW100;
