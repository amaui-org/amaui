import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToastFilled'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h480v-80H240v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialToastFilled.displayName = 'AmauiIconMaterialToastFilled';

export default IconMaterialToastFilled;
