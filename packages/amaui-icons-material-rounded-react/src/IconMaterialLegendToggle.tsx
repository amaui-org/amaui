import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLegendToggle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggle'

      short_name='LegendToggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.925 7.4-4.4 2.675q-.5.3-1.012.012Q4 9.8 4 9.225q0-.275.125-.513.125-.237.35-.362L10 5l5 3.55 3.425-2.425q.5-.35 1.037-.075.538.275.538.875 0 .25-.112.475-.113.225-.313.35L15 11ZM5 15q-.425 0-.713-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 15 19 15Zm0 4q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialLegendToggle.displayName = 'AmauiIconMaterialLegendToggle';

export default IconMaterialLegendToggle;
