import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiCallingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingSharp'
      short_name='WifiCalling'

      {...props}
    >
      <path d="M16.5 10.5 10.975 4.95Q12.225 4 13.65 3.5Q15.075 3 16.5 3Q17.925 3 19.337 3.525Q20.75 4.05 22 5ZM16.5 7.65Q16.5 7.65 16.5 7.65Q16.5 7.65 16.5 7.65Q16.5 7.65 16.5 7.65Q16.5 7.65 16.5 7.65ZM19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21ZM6.025 9 7.675 7.35 7.25 5H5.025Q5.15 6.025 5.375 7.025Q5.6 8.025 6.025 9ZM14.975 17.95Q15.95 18.375 16.963 18.625Q17.975 18.875 19 18.95V16.75L16.65 16.275ZM6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9ZM14.975 17.95Q14.975 17.95 14.975 17.95Q14.975 17.95 14.975 17.95ZM16.5 7.65 18.725 5.45Q18.275 5.225 17.713 5.112Q17.15 5 16.5 5Q15.85 5 15.288 5.1Q14.725 5.2 14.25 5.425Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingSharp.displayName = 'AmauiIconMaterialWifiCallingSharp';

export default IconMaterialWifiCallingSharp;
