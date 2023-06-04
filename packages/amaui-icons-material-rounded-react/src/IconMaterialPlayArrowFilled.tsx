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
      <path d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowFilled.displayName = 'AmauiIconMaterialPlayArrowFilled';

export default IconMaterialPlayArrowFilled;
