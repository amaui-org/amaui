import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRightFilled'

      short_name='TurnSlightRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20q-.425 0-.712-.288Q9 19.425 9 19v-6.575q0-.4.163-.775.162-.375.437-.65l5-5h-1.25q-.425 0-.712-.287-.288-.288-.288-.713t.288-.713Q12.925 4 13.35 4H17q.425 0 .712.287Q18 4.575 18 5v3.65q0 .425-.288.712-.287.288-.712.288t-.712-.288Q16 9.075 16 8.65V7.4l-5 5V19q0 .425-.287.712Q10.425 20 10 20Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRightFilled.displayName = 'AmauiIconMaterialTurnSlightRightFilled';

export default IconMaterialTurnSlightRightFilled;
