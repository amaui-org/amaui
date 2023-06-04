import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllFilled'

      short_name='DoneAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.7 18-5.65-5.65 1.425-1.4 4.25 4.25 1.4 1.4Zm5.65 0L6.7 12.35l1.4-1.425 4.25 4.25 9.2-9.2 1.4 1.425Zm0-5.65-1.425-1.4L15.875 6 17.3 7.4Z"/>
    </Icon>
  );
});

IconMaterialDoneAllFilled.displayName = 'AmauiIconMaterialDoneAllFilled';

export default IconMaterialDoneAllFilled;
