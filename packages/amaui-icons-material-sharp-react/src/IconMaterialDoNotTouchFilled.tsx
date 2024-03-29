import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchFilled'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.6-1.125-1.125.525.525H9.7L2 13.875l1.7-1.625L7 14.125v-4.3l-5.6-5.6L2.8 2.8l18.4 18.4ZM20 17.175 13.825 11H14V2h2.5v9h1V4H20Zm-7-7-2.5-2.5V1H13Zm-3.5-3.5L7 4.175V3h2.5Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchFilled.displayName = 'AmauiIconMaterialDoNotTouchFilled';

export default IconMaterialDoNotTouchFilled;
