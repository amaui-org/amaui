import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarW100'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 367.775-212H212v-155.775L100-480l112-112.225V-748h155.775L480-860l112.225 112H748v155.775L860-480 748-367.775V-212H592.225L480-100Zm0-380Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm-94-206 94-57 94 57-25-107 83-71-109-10-43-100-43 100-109 10 83 71-25 107Z"/>
    </Icon>
  );
});

IconMaterialAwardStarW100.displayName = 'AmauiIconMaterialAwardStarW100';

export default IconMaterialAwardStarW100;
