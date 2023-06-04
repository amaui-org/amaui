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
      <path d="M3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4h-8.35v-3.5q1.875-.2 3.113-1.525Q16.7 13.35 16.7 11.5H16q0 1.575-1.15 2.787Q13.7 15.5 12 15.5q-1.7 0-2.85-1.213Q8 13.075 8 11.5h-.7q0 1.85 1.238 3.175Q9.775 16 11.65 16.2v3.5Zm8.7-7.2q.425 0 .713-.3.287-.3.287-.7v-4q0-.425-.287-.713Q12.425 6.5 12 6.5q-.4 0-.7.287-.3.288-.3.713v4q0 .4.3.7.3.3.7.3Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100Filled.displayName = 'AmauiIconMaterialPermCameraMicW100Filled';

export default IconMaterialPermCameraMicW100Filled;
