import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowFilled'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V5l11 7Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowFilled.displayName = 'AmauiIconMaterialPlayArrowFilled';

export default IconMaterialPlayArrowFilled;
