import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial18mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18mpFilled'

      short_name='18mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 11.5H10v-6H7V7h1.5Zm8 0v-6H12v6Zm-3-3.5V6.5H15V8Zm0 2.5V9H15v1.5ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial18mpFilled.displayName = 'AmauiIconMaterial18mpFilled';

export default IconMaterial18mpFilled;
