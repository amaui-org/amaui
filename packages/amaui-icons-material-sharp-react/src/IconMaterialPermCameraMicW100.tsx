import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermCameraMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicW100'

      short_name='PermCameraMic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19.7H3.3V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4h-6.35V19H20V7h-4l-1.85-2h-4.3L8 7H4v12h5.65Zm2 0h.7v-3.5q1.875-.2 3.113-1.525Q16.7 13.35 16.7 11.5H16q0 1.575-1.15 2.787Q13.7 15.5 12 15.5q-1.7 0-2.85-1.213Q8 13.075 8 11.5h-.7q0 1.85 1.238 3.175Q9.775 16 11.65 16.2Zm.35-7.2q.425 0 .713-.288.287-.287.287-.712v-4q0-.425-.287-.713Q12.425 6.5 12 6.5t-.712.287Q11 7.075 11 7.5v4q0 .425.288.712.287.288.712.288ZM4 19H20 4Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicW100.displayName = 'AmauiIconMaterialPermCameraMicW100';

export default IconMaterialPermCameraMicW100;
