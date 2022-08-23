import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffSharp'
      short_name='WifiOff'

      {...props}
    >
      <path d="M21.9 11.1Q19.975 9.175 17.438 8.087Q14.9 7 12 7Q11.475 7 10.988 7.037Q10.5 7.075 10 7.15L7.45 4.6Q8.55 4.3 9.688 4.15Q10.825 4 12 4Q15.55 4 18.625 5.325Q21.7 6.65 24 8.95ZM17.9 15.05Q17.475 14.625 17.175 14.325Q16.875 14.025 16.45 13.6L12.85 10Q14.875 10.2 16.638 11.025Q18.4 11.85 19.75 13.2ZM19.75 22.6 10.35 13.15Q9.175 13.425 8.163 13.975Q7.15 14.525 6.35 15.35L4.25 13.2Q5.05 12.4 5.975 11.8Q6.9 11.2 7.95 10.75L5.7 8.5Q4.675 9.025 3.788 9.662Q2.9 10.3 2.1 11.1L0 8.95Q0.8 8.15 1.663 7.512Q2.525 6.875 3.5 6.3L1.4 4.2L2.8 2.8L21.2 21.2ZM12 21 8.475 17.45Q9.15 16.775 10.05 16.387Q10.95 16 12 16Q13.05 16 13.95 16.387Q14.85 16.775 15.525 17.45Z"/>
    </Icon>
  );
});

IconMaterialWifiOffSharp.displayName = 'AmauiIconMaterialWifiOffSharp';

export default IconMaterialWifiOffSharp;
