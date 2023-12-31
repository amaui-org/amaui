import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipsFilled'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialChipsFilled.displayName = 'AmauiIconMaterialChipsFilled';

export default IconMaterialChipsFilled;
