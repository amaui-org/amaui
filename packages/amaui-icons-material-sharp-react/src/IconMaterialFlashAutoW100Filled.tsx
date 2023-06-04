import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoW100Filled'

      short_name='FlashAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.55 11 3.55-9h.35l3.6 9h-.8l-1.1-2.7H15.4L14.3 11Zm2.1-3.35h3.25l-1.6-4.1h-.1ZM6.15 21.9V14H3.5V3.5h8.75l-3.5 7.85h3.5Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoW100Filled.displayName = 'AmauiIconMaterialFlashAutoW100Filled';

export default IconMaterialFlashAutoW100Filled;
