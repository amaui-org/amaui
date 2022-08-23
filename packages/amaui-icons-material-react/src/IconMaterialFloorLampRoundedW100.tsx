import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampRoundedW100'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M12 19q-.15 0-.25-.1t-.1-.25V11H7.425q-.375 0-.613-.312-.237-.313-.112-.663L8.075 5.65q.15-.5.55-.775T9.5 4.6h5q.5 0 .887.275.388.275.538.775l1.375 4.375q.125.35-.112.663-.238.312-.613.312H12.35v7.65q0 .15-.1.25T12 19Zm-4.65-8.7h9.3l-1.375-4.425q-.075-.25-.287-.412-.213-.163-.488-.163h-5q-.275 0-.488.163-.212.162-.287.412ZM9 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T9 20h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3-12.9Z"/>
    </Icon>
  );
});

IconMaterialFloorLampRoundedW100.displayName = 'AmauiIconMaterialFloorLampRoundedW100';

export default IconMaterialFloorLampRoundedW100;
