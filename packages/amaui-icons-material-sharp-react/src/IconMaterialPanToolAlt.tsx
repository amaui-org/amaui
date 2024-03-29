import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAlt'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.775 21-5.75-5.75L6.2 13l2.875.65V5.5q0-1.05.725-1.775Q10.525 3 11.575 3q1.05 0 1.775.725.725.725.725 1.775v4.3h.8l5.3 2.575L18.75 21Zm.85-2h6.4l.95-5.45-4.15-2.05h-1.75v-6q0-.225-.137-.363Q11.8 5 11.575 5q-.225 0-.362.137-.138.138-.138.363v10.6l-4.25-.9Zm0 0h6.4Z"/>
    </Icon>
  );
});

IconMaterialPanToolAlt.displayName = 'AmauiIconMaterialPanToolAlt';

export default IconMaterialPanToolAlt;
