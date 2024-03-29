import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownFilled'

      short_name='ArrowsMoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.425 0-.713-.288Q5 20.425 5 20v-9q0-.425.287-.713Q5.575 10 6 10t.713.287Q7 10.575 7 11v8h8q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 21 15 21Zm5-5q-.425 0-.712-.288Q10 15.425 10 15V6q0-.425.288-.713Q10.575 5 11 5t.713.287Q12 5.575 12 6v8h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 16 20 16Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownFilled.displayName = 'AmauiIconMaterialArrowsMoreDownFilled';

export default IconMaterialArrowsMoreDownFilled;
