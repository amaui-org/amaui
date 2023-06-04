import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadge'

      short_name='LteMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 736h200v-80H240V416h-80v320Zm240 0h80V496h80v-80H320v80h80v240Zm200 0h200v-80H680v-40h80v-80h-80v-40h120v-80H600v320ZM40 936V216h880v720H40Zm80-80h720V296H120v560Zm0 0V296v560Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadge.displayName = 'AmauiIconMaterialLteMobiledataBadge';

export default IconMaterialLteMobiledataBadge;
