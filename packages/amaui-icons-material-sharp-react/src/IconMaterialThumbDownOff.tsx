import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOff'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 16v-4.4L4.65 3H17v13l-7 7-1.85-1.85L9.45 16ZM15 5H6l-3 7v2h9l-1.35 5.5L15 15.15Zm0 10.15V5Zm2 .85v-2h3V5h-3V3h5v13Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOff.displayName = 'AmauiIconMaterialThumbDownOff';

export default IconMaterialThumbDownOff;
