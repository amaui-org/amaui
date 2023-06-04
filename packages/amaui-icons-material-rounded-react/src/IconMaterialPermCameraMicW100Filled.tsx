import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermCameraMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100Filled'

      short_name='PermCameraMic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425h-6.85v-3.5q1.8-.2 3.013-1.413 1.212-1.212 1.337-2.937.025-.15-.087-.25-.113-.1-.263-.1-.15 0-.25.1t-.125.25q-.125 1.475-1.25 2.562Q13.6 15.5 12 15.5t-2.725-1.088q-1.125-1.087-1.25-2.562Q8 11.7 7.9 11.6t-.25-.1q-.15 0-.262.1-.113.1-.088.25.125 1.725 1.338 2.937Q9.85 16 11.65 16.2v3.5Zm7.2-7.2q.425 0 .713-.288.287-.287.287-.712v-4q0-.425-.287-.713Q12.425 6.5 12 6.5t-.712.287Q11 7.075 11 7.5v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100Filled.displayName = 'AmauiIconMaterialPermCameraMicW100Filled';

export default IconMaterialPermCameraMicW100Filled;
