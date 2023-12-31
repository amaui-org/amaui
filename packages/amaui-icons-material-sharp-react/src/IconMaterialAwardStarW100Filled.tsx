import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarW100Filled'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 368-212H212v-156L100-480l112-112v-156h156l112-112 112 112h156v156l112 112-112 112v156H592L480-100Zm-94-246 94-57 94 57-25-107 83-71-109-10-43-100-43 100-109 10 83 71-25 107Z"/>
    </Icon>
  );
});

IconMaterialAwardStarW100Filled.displayName = 'AmauiIconMaterialAwardStarW100Filled';

export default IconMaterialAwardStarW100Filled;
