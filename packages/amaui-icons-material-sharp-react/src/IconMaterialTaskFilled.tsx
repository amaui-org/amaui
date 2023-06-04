import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskFilled'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 18 5.65-5.65-1.45-1.45-4.225 4.225-2.1-2.1L7.4 14.45ZM4 22V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialTaskFilled.displayName = 'AmauiIconMaterialTaskFilled';

export default IconMaterialTaskFilled;
