import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVert'

      short_name='SwapVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 18.175V12q0-.425.288-.713Q14.575 11 15 11t.713.287Q16 11.575 16 12v6.175l1.875-1.875q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.687 0-.413.3-.713.3-.275.7-.288.4-.012.7.288ZM8 5.825 6.125 7.7Q5.8 8.025 5.4 8q-.4-.025-.675-.3-.3-.3-.3-.713 0-.412.275-.687l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.275.275.275.7 0 .425-.275.7-.3.3-.712.3-.413 0-.713-.3L10 5.825V12q0 .425-.287.712Q9.425 13 9 13t-.712-.288Q8 12.425 8 12Z"/>
    </Icon>
  );
});

IconMaterialSwapVert.displayName = 'AmauiIconMaterialSwapVert';

export default IconMaterialSwapVert;
