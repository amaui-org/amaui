import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatFilled'

      short_name='Repeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 22-4-4 4-4 1.4 1.45L6.85 17H17v-4h2v6H6.85l1.55 1.55ZM5 11V5h12.15L15.6 3.45 17 2l4 4-4 4-1.4-1.45L17.15 7H7v4Z"/>
    </Icon>
  );
});

IconMaterialRepeatFilled.displayName = 'AmauiIconMaterialRepeatFilled';

export default IconMaterialRepeatFilled;
