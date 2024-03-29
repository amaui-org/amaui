import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderTop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTop'

      short_name='BorderTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-2h2v2Zm0-8v-2h2v2Zm4 0v-2h2v2Zm0 8v-2h2v2Zm-8-4v-2h2v2Zm0 4v-2h2v2Zm0-8v-2h2v2Zm0-4V7h2v2Zm8 8v-2h2v2Zm8-8V7h2v2Zm0 4v-2h2v2ZM4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm15 12v-2h2v2Zm-4 4v-2h2v2ZM11 9V7h2v2Zm8 12v-2h2v2Zm-4-8v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderTop.displayName = 'AmauiIconMaterialBorderTop';

export default IconMaterialBorderTop;
