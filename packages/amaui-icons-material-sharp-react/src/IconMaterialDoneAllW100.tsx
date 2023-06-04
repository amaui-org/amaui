import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllW100'

      short_name='DoneAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.7 17.1-4.75-4.75.5-.5L6.7 16.1l.9-.9.5.5Zm5.65 0L7.6 12.35l.5-.5 4.25 4.25 9.2-9.2.5.5Zm-.9-4.75-.5-.5L15.9 6.9l.5.5Z"/>
    </Icon>
  );
});

IconMaterialDoneAllW100.displayName = 'AmauiIconMaterialDoneAllW100';

export default IconMaterialDoneAllW100;
