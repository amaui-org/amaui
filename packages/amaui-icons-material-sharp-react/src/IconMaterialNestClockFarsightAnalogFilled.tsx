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
      <path d="m14.55 16.55 1.4-1.425-2.95-2.95V8h-2v5ZM11 6h2V4h-2Zm7 7h2v-2h-2Zm-7 7h2v-2h-2Zm-7-7h2v-2H4Zm8 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNestClockFarsightAnalogFilled.displayName = 'AmauiIconMaterialNestClockFarsightAnalogFilled';

export default IconMaterialNestClockFarsightAnalogFilled;
