import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRange'

      short_name='ArrowRange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 776 80 576l200-200 56 57-103 103h493L623 433l57-57 200 200-200 200-57-56 103-104H233l103 104-56 56Z"/>
    </Icon>
  );
});

IconMaterialArrowRange.displayName = 'AmauiIconMaterialArrowRange';

export default IconMaterialArrowRange;
