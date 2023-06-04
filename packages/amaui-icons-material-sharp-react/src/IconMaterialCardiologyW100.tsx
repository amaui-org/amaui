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
      <path d="M300 268q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828 436q0 7-.5 13t-1.5 13h-28q1-7 1.5-13t.5-13q0-60-40-100t-100-40q-48 0-88.5 27.5T494 410h-28q-38-60-78-87t-88-27q-59 0-99.5 40T160 436q0 7 .5 13t1.5 13h-28q-1-7-1.5-13t-.5-13q0-71 48.5-119.5T300 268Zm-20 422h39q32 32 72 69.5t89 82.5q49-45 89-82.5t72-69.5h39q-35 35-78.5 77T502 860l-22 20-22-20q-56-51-99.5-93T280 690Zm162 20q4 0 6.5-2.5t4.5-6.5l71-213 59 89q5 6 11 9.5t14 3.5h286v-28H606l-75-113q-2-3-5.5-4.5T518 443q-4 0-7 2.5t-4 6.5l-71 214-61-91q-5-6-11-9.5t-14-3.5H66v28h286l76 114q2 4 6 5t8 1Zm38-141Z"/>
    </Icon>
  );
});

IconMaterialCardiologyW100.displayName = 'AmauiIconMaterialCardiologyW100';

export default IconMaterialCardiologyW100;
