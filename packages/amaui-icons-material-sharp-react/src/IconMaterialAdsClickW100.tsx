import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdsClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdsClickW100'

      short_name='AdsClick'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.325 16.65Q9.6 16.375 8.45 15.075 7.3 13.775 7.3 12q0-1.95 1.375-3.325Q10.05 7.3 12 7.3q1.775 0 3.075 1.138 1.3 1.137 1.575 2.862l-.775-.225q-.325-1.35-1.387-2.212Q13.425 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.425.875 2.5t2.2 1.4Zm1.2 4.025q-.125.025-.263.025H12q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v.25q0 .125-.025.25L20 12.3V12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20h.3Zm7-.4-4.95-4.975-.825 2.5L12 12l5.8 1.75-2.5.825 4.975 4.95Z"/>
    </Icon>
  );
});

IconMaterialAdsClickW100.displayName = 'AmauiIconMaterialAdsClickW100';

export default IconMaterialAdsClickW100;
