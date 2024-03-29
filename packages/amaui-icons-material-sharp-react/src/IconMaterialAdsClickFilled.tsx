import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdsClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickFilled'

      short_name='AdsClick'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.7 18q-2.4-.125-4.05-1.85T6 12q0-2.5 1.75-4.25T12 6q2.425 0 4.15 1.65Q17.875 9.3 18 11.7l-2.1-.625q-.325-1.35-1.4-2.212Q13.425 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.425.863 2.5.862 1.075 2.212 1.4Zm1.2 3.95q-.225.05-.45.05H12q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12v.45q0 .225-.05.45L20 12.3V12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20h.3Zm7.625.55-4.275-4.275L15 22l-3-10 10 3-3.775 1.25 4.275 4.275Z"/>
    </Icon>
  );
});

IconMaterialAdsClickFilled.displayName = 'AmauiIconMaterialAdsClickFilled';

export default IconMaterialAdsClickFilled;
