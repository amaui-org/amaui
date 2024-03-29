import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouch'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.6-1.125-1.125.525.525H9.7L2 13.875l1.7-1.625L7 14.125v-4.3l-5.6-5.6L2.8 2.8l18.4 18.4Zm-6.7-6.7ZM20 17.175l-2-2V13h-2.175l-2-2H14V2h2.5v9h1V4H20Zm-7-7-2.5-2.5V1H13Zm-3.5-3.5L7 4.175V3h2.5ZM15.825 13Zm-5.25 7h6.6L9 11.825V16H6.875Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouch.displayName = 'AmauiIconMaterialDoNotTouch';

export default IconMaterialDoNotTouch;
