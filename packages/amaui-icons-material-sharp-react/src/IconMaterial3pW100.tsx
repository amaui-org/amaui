import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3pW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pW100'

      short_name='3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 12.85h6.2v-.05q0-.7-.887-1.175-.888-.475-2.213-.475-1.325 0-2.212.475Q8.9 12.1 8.9 12.8Zm3.1-3.5q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 6.65 12 6.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterial3pW100.displayName = 'AmauiIconMaterial3pW100';

export default IconMaterial3pW100;
