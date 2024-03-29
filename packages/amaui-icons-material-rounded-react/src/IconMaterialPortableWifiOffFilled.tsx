import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPortableWifiOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortableWifiOffFilled'

      short_name='PortableWifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.35 17.5-1.45-1.45q.525-.875.812-1.9Q20 13.125 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-1.125 0-2.137.287-1.013.288-1.913.813L6.5 3.65q1.2-.8 2.588-1.225Q10.475 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.525-.425 2.912Q21.15 16.3 20.35 17.5Zm-1.275 4.4L8.125 10.975q-.05.25-.087.5Q8 11.725 8 12q0 .65.188 1.2.187.55.512 1.05.25.375.225.787-.025.413-.3.688-.3.3-.712.287Q7.5 16 7.25 15.675q-.575-.775-.912-1.7Q6 13.05 6 12q0-.7.15-1.35.15-.65.425-1.225L5.1 7.95q-.525.9-.813 1.913Q4 10.875 4 12q0 1.475.488 2.762.487 1.288 1.362 2.338.275.325.263.737-.013.413-.313.713t-.7.287q-.4-.012-.675-.312Q3.3 17.2 2.65 15.537 2 13.875 2 12q0-1.55.425-2.925Q2.85 7.7 3.65 6.5L2.075 4.925q-.275-.275-.275-.7 0-.425.3-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3Zm-1.65-7.325-1.55-1.55q.05-.25.088-.5Q16 12.275 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-.275 0-.525.037-.25.038-.5.088l-1.55-1.55Q10 6.3 10.65 6.15 11.3 6 12 6q2.5 0 4.25 1.75T18 12q0 .7-.15 1.35-.15.65-.425 1.225Z"/>
    </Icon>
  );
});

IconMaterialPortableWifiOffFilled.displayName = 'AmauiIconMaterialPortableWifiOffFilled';

export default IconMaterialPortableWifiOffFilled;
