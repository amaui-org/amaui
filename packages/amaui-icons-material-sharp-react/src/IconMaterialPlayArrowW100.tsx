import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayArrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowW100'

      short_name='PlayArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 16.65v-9.3L16.6 12ZM10 12Zm0 3.35L15.3 12 10 8.65Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100.displayName = 'AmauiIconMaterialPlayArrowW100';

export default IconMaterialPlayArrowW100;
