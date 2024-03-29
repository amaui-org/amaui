import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudSync = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSync'

      short_name='CloudSync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-1.25 0-2.125-.875T12 17q0-1.2.825-2.062.825-.863 2.025-.913.425-.9 1.263-1.463Q16.95 12 18 12q1.325 0 2.288.863.962.862 1.162 2.137 1.05 0 1.8.725t.75 1.75q0 1.05-.725 1.787Q22.55 20 21.5 20Zm0-2h6.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-1.75v-1.25q0-.725-.512-1.238Q18.725 14 18 14t-1.237.512q-.513.513-.513 1.238V16H15q-.425 0-.712.288Q14 16.575 14 17t.288.712Q14.575 18 15 18ZM5 20q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.725q-1.275-1.1-2-2.65Q4 13.8 4 12q0-2.375 1.238-4.287Q6.475 5.8 8.475 4.825q.575-.275 1.05 0Q10 5.1 10 5.75q0 .3-.175.512-.175.213-.425.338-1.5.725-2.45 2.162Q6 10.2 6 12q0 1.35.537 2.488Q7.075 15.625 8 16.45V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20Zm12.9-9q-.175-1.025-.675-1.9T16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.725q1.075.95 1.763 2.225.687 1.275.887 2.775Zm.1 5Z"/>
    </Icon>
  );
});

IconMaterialCloudSync.displayName = 'AmauiIconMaterialCloudSync';

export default IconMaterialCloudSync;
