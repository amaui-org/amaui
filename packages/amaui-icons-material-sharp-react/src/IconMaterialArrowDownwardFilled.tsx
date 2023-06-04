import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardFilled'

      short_name='ArrowDownward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20-8-8 1.4-1.425 5.6 5.6V4h2v12.175l5.6-5.6L20 12Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardFilled.displayName = 'AmauiIconMaterialArrowDownwardFilled';

export default IconMaterialArrowDownwardFilled;
