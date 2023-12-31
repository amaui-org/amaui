import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabledFilled'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M832-16 728-120H120v-608L16-832l57-57L889-73l-57 57Zm8-220L650-426l110-124v-120L593-483 236-840h604v604Zm-640-46 160-160 162 162 22-24-218-218-126 126v114Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledFilled.displayName = 'AmauiIconMaterialBidLandscapeDisabledFilled';

export default IconMaterialBidLandscapeDisabledFilled;
