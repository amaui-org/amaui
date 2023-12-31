import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChips = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chips'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialChips.displayName = 'AmauiIconMaterialChips';

export default IconMaterialChips;
