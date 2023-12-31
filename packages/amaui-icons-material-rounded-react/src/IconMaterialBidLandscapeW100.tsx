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
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-148v88q0 12 10 22t22 10h496q12 0 22-10t10-22v-352L553-355q-9 10-21.5 10t-21.5-9L372-492 200-320Zm0-40 151-151q9-9 21-9t21 9l139 139 228-254v-102q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v368Zm0-224v-42 254-160 212-172 160-252Zm0 224v-400 388-160 172Zm0 40v-172 160-252 384-120Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeW100.displayName = 'AmauiIconMaterialBidLandscapeW100';

export default IconMaterialBidLandscapeW100;
