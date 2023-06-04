import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3pW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pW100Filled'

      short_name='3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 12.85h6.2v-.05q0-.7-.887-1.175-.888-.475-2.213-.475-1.325 0-2.212.475Q8.9 12.1 8.9 12.8Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 6.65 12 6.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterial3pW100Filled.displayName = 'AmauiIconMaterial3pW100Filled';

export default IconMaterial3pW100Filled;
