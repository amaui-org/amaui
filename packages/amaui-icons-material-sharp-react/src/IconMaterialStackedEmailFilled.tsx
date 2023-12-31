import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmailFilled'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-560h720v560H200ZM40-120v-580h80v500h660v80H40Zm520-349 280-194v-97L560-566 280-760v97l280 194Z"/>
    </Icon>
  );
});

IconMaterialStackedEmailFilled.displayName = 'AmauiIconMaterialStackedEmailFilled';

export default IconMaterialStackedEmailFilled;
