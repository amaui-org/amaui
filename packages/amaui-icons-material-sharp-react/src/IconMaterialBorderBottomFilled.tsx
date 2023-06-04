import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomFilled'

      short_name='BorderBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4v-2h2v2Zm8 0v-2h2v2Zm8 0v-2h2v2ZM3 13v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2ZM3 9V7h2v2Zm8 0V7h2v2Zm8 0V7h2v2ZM3 5V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomFilled.displayName = 'AmauiIconMaterialBorderBottomFilled';

export default IconMaterialBorderBottomFilled;
