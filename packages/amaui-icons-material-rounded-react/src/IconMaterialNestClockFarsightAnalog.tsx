import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestClockFarsightAnalog = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestClockFarsightAnalog'

      short_name='NestClockFarsightAnalog'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 12.175 2.25 2.25q.275.275.275.688 0 .412-.275.712-.3.3-.712.3-.413 0-.713-.3L11.7 13.7q-.35-.35-.525-.775Q11 12.5 11 12V9q0-.425.288-.713Q11.575 8 12 8t.713.287Q13 8.575 13 9ZM12 4q.425 0 .713.287Q13 4.575 13 5t-.287.713Q12.425 6 12 6t-.712-.287Q11 5.425 11 5t.288-.713Q11.575 4 12 4Zm8 8q0 .425-.288.712Q19.425 13 19 13t-.712-.288Q18 12.425 18 12t.288-.713Q18.575 11 19 11t.712.287Q20 11.575 20 12Zm-8 6q.425 0 .713.288.287.287.287.712t-.287.712Q12.425 20 12 20t-.712-.288Q11 19.425 11 19t.288-.712Q11.575 18 12 18Zm-6-6q0 .425-.287.712Q5.425 13 5 13t-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11t.713.287Q6 11.575 6 12Zm6 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialNestClockFarsightAnalog.displayName = 'AmauiIconMaterialNestClockFarsightAnalog';

export default IconMaterialNestClockFarsightAnalog;
