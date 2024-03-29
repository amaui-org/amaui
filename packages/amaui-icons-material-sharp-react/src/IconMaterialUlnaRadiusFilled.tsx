import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUlnaRadiusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusFilled'

      short_name='UlnaRadius'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.975 21.95q-.55 0-1.062-.213-.513-.212-.863-.562l-.112-.113-.113-.112h-2.35q-1.05 0-1.775-.738-.725-.737-.725-1.787 0-.575.25-1.088.25-.512.75-.912l1-.8v-5.55l-1.55-2.2q-.225-.325-.337-.7-.113-.375-.113-.725 0-1.05.725-1.775.725-.725 1.775-.725h5q1.05 0 1.763.712.712.713.712 1.763 0 .375-.1.725t-.325.675l-1.55 2.25v5.6l.975.975q.5.5.763 1.087.262.588.262 1.213 0 1.25-.875 2.125t-2.125.875ZM8.8 20.65q-.275.125-.562.187-.288.063-.588.063-1.125 0-1.9-.763-.775-.762-.775-1.862v-9.1L3.225 5.5q-.125-.25-.187-.525-.063-.275-.063-.55 0-1.05.725-1.763.725-.712 1.775-.712h4.5v2q1.05 0 1.775.725.725.725.725 1.775 0 .425-.125.787-.125.363-.375.688l-1 1.35v5L12.05 15.9q.2.325.313.687.112.363.112.713 0 .725-.375 1.325t-1 .9Z"/>
    </Icon>
  );
});

IconMaterialUlnaRadiusFilled.displayName = 'AmauiIconMaterialUlnaRadiusFilled';

export default IconMaterialUlnaRadiusFilled;
