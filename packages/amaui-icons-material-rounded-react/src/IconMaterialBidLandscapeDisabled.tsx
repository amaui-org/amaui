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
      <path d="M728-120H200q-33 0-56.5-23.5T120-200v-528l-76-76q-12-12-12-28.5T44-861q12-12 28.5-12t28.5 12l760 760q12 12 12 28t-12 28q-12 12-28.5 12T804-45l-76-75ZM360-442 200-282v82h448L543-305q-12 8-26 7t-25-12L360-442ZM200-648v252l126-126-126-126Zm36-192h524q33 0 56.5 23.5T840-760v524l-80-80v-234L650-426l-57-57 167-187v-90H316l-80-80Zm357 357Zm-158 70ZM326-522Zm34 80Zm176-98Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabled.displayName = 'AmauiIconMaterialBidLandscapeDisabled';

export default IconMaterialBidLandscapeDisabled;
