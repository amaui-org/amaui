import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2W100'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132v-656h536l-85 162 85 162H280v332h-28Zm28-360h461l-70-134 70-134H280v268Zm0 0v-268 268Z"/>
    </Icon>
  );
});

IconMaterialFlag2W100.displayName = 'AmauiIconMaterialFlag2W100';

export default IconMaterialFlag2W100;
