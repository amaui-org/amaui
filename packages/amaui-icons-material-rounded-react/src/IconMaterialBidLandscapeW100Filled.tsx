import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeW100Filled'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm528-454L532-372 393-511q-9-9-21-9t-21 9L200-360v40l172-172 138 138q9 9 21.5 9t21.5-10l207-229v-42Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeW100Filled.displayName = 'AmauiIconMaterialBidLandscapeW100Filled';

export default IconMaterialBidLandscapeW100Filled;
