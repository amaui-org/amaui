import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipCameraAndroid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroid'

      short_name='FlipCameraAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm-9-5q-.425 0-.712-.288Q2 9.425 2 9V5q0-.425.288-.713Q2.575 4 3 4t.713.287Q4 4.575 4 5v1q1.425-1.9 3.525-2.95Q9.625 2 12 2q3.25 0 5.825 1.875T21.45 8.75q.175.5-.113.875-.287.375-.862.375-.275 0-.55-.213-.275-.212-.4-.487-.85-2.375-2.9-3.837Q14.575 4 12 4 9.85 4 8 5.062 6.15 6.125 5.1 8H7q.425 0 .713.287Q8 8.575 8 9t-.287.712Q7.425 10 7 10Zm9 12q-3.25 0-5.825-1.875T2.55 15.25q-.175-.5.113-.875Q2.95 14 3.525 14q.275 0 .55.212.275.213.4.488.85 2.375 2.9 3.838Q9.425 20 12 20q2.15 0 4-1.062 1.85-1.063 2.9-2.938H17q-.425 0-.712-.288Q16 15.425 16 15t.288-.713Q16.575 14 17 14h4q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712Q21.425 20 21 20t-.712-.288Q20 19.425 20 19v-1q-1.425 1.9-3.525 2.95Q14.375 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroid.displayName = 'AmauiIconMaterialFlipCameraAndroid';

export default IconMaterialFlipCameraAndroid;
