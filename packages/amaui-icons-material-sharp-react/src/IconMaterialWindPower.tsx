import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindPower'

      short_name='WindPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 23q0-.825.588-1.413Q11.175 21 12 21v-5.2q-.3-.125-.562-.288-.263-.162-.488-.362L8.05 17 1 15v-4h9.8q.25-.275.55-.475.3-.2.65-.325V5.9L17.35.925l3.375 2.125-5.125 8.475q.175.3.263.65.087.35.112.725l3.525.85 3.55 6.35-2.825 2.825-6.225-6.2V21q.825 0 1.413.587Q16 22.175 16 23ZM4 5V3h6v2Zm10 1.775V10.2q.025 0 .038.012.012.013.037.013L18 3.675l-.4-.25ZM1 9V7h5v2Zm12 5q.425 0 .713-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12t-.712.287Q12 12.575 12 13t.288.712Q12.575 14 13 14Zm-5.275.85 2.325-1.4q-.025-.125-.025-.225V13H3v.5Zm10.475.625-2.85-.65q-.05.05-.1.125t-.1.125l5.075 5.05.35-.35ZM3 21v-2h5v2Zm10-8Zm1-2.775ZM10.05 13Zm5.1 2.075Z"/>
    </Icon>
  );
});

IconMaterialWindPower.displayName = 'AmauiIconMaterialWindPower';

export default IconMaterialWindPower;
