import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestClockFarsightAnalogFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestClockFarsightAnalogFilled'

      short_name='NestClockFarsightAnalog'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 12.175V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3q0 .5.175.925.175.425.525.775l2.125 2.125q.3.3.713.3.412 0 .712-.3.275-.3.275-.712 0-.413-.275-.688ZM12 4q-.425 0-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6t.713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4Zm8 8q0-.425-.288-.713Q19.425 11 19 11t-.712.287Q18 11.575 18 12t.288.712Q18.575 13 19 13t.712-.288Q20 12.425 20 12Zm-8 6q-.425 0-.712.288Q11 18.575 11 19t.288.712Q11.575 20 12 20t.713-.288Q13 19.425 13 19t-.287-.712Q12.425 18 12 18Zm-6-6q0-.425-.287-.713Q5.425 11 5 11t-.713.287Q4 11.575 4 12t.287.712Q4.575 13 5 13t.713-.288Q6 12.425 6 12Zm6 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNestClockFarsightAnalogFilled.displayName = 'AmauiIconMaterialNestClockFarsightAnalogFilled';

export default IconMaterialNestClockFarsightAnalogFilled;
