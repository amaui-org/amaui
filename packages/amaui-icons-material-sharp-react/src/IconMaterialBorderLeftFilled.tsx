import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftFilled'

      short_name='BorderLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h2v18Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm-8-4v-2h2v2Zm8 0v-2h2v2ZM7 13v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm-8-4V7h2v2Zm8 0V7h2v2ZM7 5V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftFilled.displayName = 'AmauiIconMaterialBorderLeftFilled';

export default IconMaterialBorderLeftFilled;
