import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeW100'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-148v120h560v-384L532-332 372-492 200-320Zm0-40 172-172 160 160 228-254v-134H200v400Zm0-224v-42 254-160 212-172 160-252Zm0 224v-400 388-160 172Zm0 40v-172 160-252 384-120Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeW100.displayName = 'AmauiIconMaterialBidLandscapeW100';

export default IconMaterialBidLandscapeW100;
