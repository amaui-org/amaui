import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamFloodlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamFloodlightW100'

      short_name='NestCamFloodlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.95 17.475V.775H3.3q.575 0 .963.387.387.388.387.963V5.1Q5.2 3.9 6.3 3.162q1.1-.737 2.475-.737h5.775v7.825l1.575 1.575L9.5 18.45l-3.95-3.925q-.275-.275-.5-.587-.225-.313-.4-.663v2.85q0 .575-.387.962-.388.388-.963.388Zm6.825-14.35q-1.625 0-2.737 1.15-1.113 1.15-1.113 2.8 0 .325.038.625.037.3.137.6.65-.875 1.625-1.375t2.125-.5q.95 0 1.8.387.85.388 1.525 1.063L13.85 9.55V3.125ZM4.85 11.2q0 .8.313 1.525.312.725.887 1.3l3.45 3.45 5.65-5.65-3.5-3.5q-.575-.575-1.287-.887-.713-.313-1.513-.313-1.7 0-2.85 1.212Q4.85 9.55 4.85 11.2Zm14.1 4.275h-2.2v-.7h2.2ZM16.8 19.55 15.25 18l.475-.475 1.55 1.55Zm-4.3 1.675v-2.2h.7v2.2ZM10 12.3Z"/>
    </Icon>
  );
});

IconMaterialNestCamFloodlightW100.displayName = 'AmauiIconMaterialNestCamFloodlightW100';

export default IconMaterialNestCamFloodlightW100;
