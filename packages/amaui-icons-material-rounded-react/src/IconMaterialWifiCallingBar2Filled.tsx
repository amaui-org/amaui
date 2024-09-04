import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar2Filled'

      short_name='WifiCallingBar2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-520q-17 0-28.5-11.5T620-560q0-17 11.5-28.5T660-600q17 0 28.5 11.5T700-560q0 17-11.5 28.5T660-520Zm0-140q-21 0-40.5 6T583-637q-11 7-23.5 6.5T539-639q-9-9-8.5-21t10.5-20q26-20 56.5-30t62.5-10q32 0 62.5 10t56.5 30q10 8 10.5 20t-8.5 21q-8 8-20.5 8.5T737-637q-17-11-36.5-17t-40.5-6Zm138 540q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar2Filled.displayName = 'AmauiIconMaterialWifiCallingBar2Filled';

export default IconMaterialWifiCallingBar2Filled;
