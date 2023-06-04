import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardiologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardiologyW100'

      short_name='Cardiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M300 268q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828 436q0 7-.5 13t-1.5 13h-28q1-7 1.5-13t.5-13q0-60-40-100t-100-40q-48 0-88.5 27.5T494 410h-28q-38-60-78-87t-88-27q-59 0-99.5 40T160 436q0 7 .5 13t1.5 13h-28q-1-7-1.5-13t-.5-13q0-71 48.5-119.5T300 268Zm180 596q-10 0-18.5-4.5T445 848q-10-10-37.5-36T352 759q-28-27-50-48l-22-21h39q32 32 72 69.5t89 82.5q49-45 89-82.5t72-69.5h39l-22 21q-22 21-50.5 48.5t-55 53.5Q526 839 516 848q-8 8-16.5 12t-19.5 4Zm-38-154q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h272q6 0 10-4t4-10q0-6-4-10t-10-4H606l-75-113q-2-3-5.5-4.5T518 443q-4 0-7 2.5t-4 6.5l-71 214-61-91q-5-6-11-9.5t-14-3.5H80q-6 0-10 4t-4 10q0 6 4 10t10 4h272l76 114q2 4 6 5t8 1Zm38-141Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100.displayName = 'AmauiIconMaterialCardiologyW100';

export default IconMaterialCardiologyW100;
