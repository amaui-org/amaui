import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGraphicEq = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GraphicEq'

      short_name='GraphicEq'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18q-.425 0-.713-.288Q7 17.425 7 17V7q0-.425.287-.713Q7.575 6 8 6t.713.287Q9 6.575 9 7v10q0 .425-.287.712Q8.425 18 8 18Zm4 4q-.425 0-.712-.288Q11 21.425 11 21V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v18q0 .425-.287.712Q12.425 22 12 22Zm-8-8q-.425 0-.712-.288Q3 13.425 3 13v-2q0-.425.288-.713Q3.575 10 4 10t.713.287Q5 10.575 5 11v2q0 .425-.287.712Q4.425 14 4 14Zm12 4q-.425 0-.712-.288Q15 17.425 15 17V7q0-.425.288-.713Q15.575 6 16 6t.712.287Q17 6.575 17 7v10q0 .425-.288.712Q16.425 18 16 18Zm4-4q-.425 0-.712-.288Q19 13.425 19 13v-2q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v2q0 .425-.288.712Q20.425 14 20 14Z"/>
    </Icon>
  );
});

IconMaterialGraphicEq.displayName = 'AmauiIconMaterialGraphicEq';

export default IconMaterialGraphicEq;
