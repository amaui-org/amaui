import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrow'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V5l11 7Zm2-7Zm0 3.35L15.25 12 10 8.65Z"/>
    </Icon>
  );
});

IconMaterialPlayArrow.displayName = 'AmauiIconMaterialPlayArrow';

export default IconMaterialPlayArrow;
