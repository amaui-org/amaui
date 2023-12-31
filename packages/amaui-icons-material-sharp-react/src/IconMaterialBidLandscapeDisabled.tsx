import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabled'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M73-889 889-73l-57 57-104-104H120v-608L16-832l57-57Zm287 447L200-282v82h448L544-304l-22 24-162-162ZM200-648v252l126-126-126-126Zm36-192h604v604l-80-80v-234L650-426l-57-57 167-187v-90H316l-80-80Zm357 357Zm-158 70ZM326-522Zm34 80Zm176-98Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabled.displayName = 'AmauiIconMaterialBidLandscapeDisabled';

export default IconMaterialBidLandscapeDisabled;
