import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenFilled'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 854V176l400 161v677L160 854Zm480 2V282L378 176h422v680H640Z"/>
    </Icon>
  );
});

IconMaterialDualScreenFilled.displayName = 'AmauiIconMaterialDualScreenFilled';

export default IconMaterialDualScreenFilled;
