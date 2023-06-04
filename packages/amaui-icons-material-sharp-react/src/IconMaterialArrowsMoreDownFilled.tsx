import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownFilled'

      short_name='ArrowsMoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V10h2v9h9v2Zm5-5V5h2v9h9v2Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownFilled.displayName = 'AmauiIconMaterialArrowsMoreDownFilled';

export default IconMaterialArrowsMoreDownFilled;
