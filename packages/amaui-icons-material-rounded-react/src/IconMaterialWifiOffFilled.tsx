import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffFilled'

      short_name='WifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.05 0-1.775-.738Q9.5 19.525 9.5 18.5q0-1.05.725-1.775Q10.95 16 12 16q1.05 0 1.775.725.725.725.725 1.775 0 1.025-.725 1.762Q13.05 21 12 21Zm8.8-10.9q-1.825-1.475-4.062-2.288Q14.5 7 12 7q-.525 0-1.012.037-.488.038-.988.113L7.45 4.6q1.1-.3 2.238-.45Q10.825 4 12 4q3.125 0 5.913 1.05Q20.7 6.1 22.9 7.95q.475.4.488 1 .012.6-.438 1.075-.425.425-1.037.45-.613.025-1.113-.375Zm-3.225 4.625-.562-.563-.563-.562-3.6-3.6q1.65.15 3.138.75 1.487.6 2.662 1.525.5.375.5.975t-.45 1.05q-.225.225-.525.337-.3.113-.6.088ZM19.05 21.9l-8.7-8.75q-.8.175-1.512.487-.713.313-1.363.738-.55.375-1.15.35-.6-.025-1.025-.45-.45-.45-.425-1.075.025-.625.5-.975.575-.45 1.225-.813.65-.362 1.35-.662L5.7 8.5q-.675.35-1.3.75t-1.2.85q-.5.4-1.112.388-.613-.013-1.038-.463-.425-.45-.425-1.075t.475-1q.575-.475 1.163-.875.587-.4 1.237-.775L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l16.975 16.975q.275.275.275.713 0 .437-.275.712-.3.3-.725.288-.425-.013-.7-.288Z"/>
    </Icon>
  );
});

IconMaterialWifiOffFilled.displayName = 'AmauiIconMaterialWifiOffFilled';

export default IconMaterialWifiOffFilled;
