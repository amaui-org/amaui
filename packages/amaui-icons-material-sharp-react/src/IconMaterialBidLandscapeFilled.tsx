import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeFilled'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm640-550L518-398 360-556 200-396v114l160-160 162 162 238-270v-120Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeFilled.displayName = 'AmauiIconMaterialBidLandscapeFilled';

export default IconMaterialBidLandscapeFilled;
