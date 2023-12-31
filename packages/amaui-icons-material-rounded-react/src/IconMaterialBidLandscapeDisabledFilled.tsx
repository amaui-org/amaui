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
      <path d="M728-120H200q-33 0-56.5-23.5T120-200v-528l-76-76q-12-12-12-28.5T44-861q12-12 28.5-12t28.5 12l760 760q12 12 12 28t-12 28q-12 12-28.5 12T804-45l-76-75Zm112-116L650-426l110-124v-120L593-483 236-840h524q33 0 56.5 23.5T840-760v524Zm-640-46 160-160 139 139q10 10 23 9.5t22-10.5L326-522 200-396v114Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledFilled.displayName = 'AmauiIconMaterialBidLandscapeDisabledFilled';

export default IconMaterialBidLandscapeDisabledFilled;
