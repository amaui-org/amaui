import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMediaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaFilled'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17V2h7l2 2h9v13Zm-4 4V6h2v13h17v2Zm8-8h10l-3.45-4.5-2.3 3-1.55-2Z"/>
    </Icon>
  );
});

IconMaterialPermMediaFilled.displayName = 'AmauiIconMaterialPermMediaFilled';

export default IconMaterialPermMediaFilled;
