import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderInnerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerFilled'

      short_name='BorderInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm8 0v-8H3v-2h8V3h2v8h8v2h-8v8Zm-4 0v-2h2v2Zm8 0v-2h2v2Zm4 0v-2h2v2ZM3 17v-2h2v2Zm16 0v-2h2v2ZM3 9V7h2v2Zm16 0V7h2v2ZM3 5V3h2v2Zm4 0V3h2v2Zm8 0V3h2v2Zm4 0V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerFilled.displayName = 'AmauiIconMaterialBorderInnerFilled';

export default IconMaterialBorderInnerFilled;
