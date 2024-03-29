import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottom'

      short_name='BorderBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 5V3h2v2Zm0 8v-2h2v2Zm4 0v-2h2v2Zm0-8V3h2v2ZM3 9V7h2v2Zm0-4V3h2v2Zm0 8v-2h2v2Zm0 4v-2h2v2Zm8-8V7h2v2Zm8 8v-2h2v2Zm0-4v-2h2v2ZM4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21ZM19 9V7h2v2Zm-4-4V3h2v2Zm-4 12v-2h2v2Zm8-12V3h2v2Zm-4 8v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderBottom.displayName = 'AmauiIconMaterialBorderBottom';

export default IconMaterialBorderBottom;
