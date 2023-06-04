import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffW100Filled'

      short_name='FramePersonOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m842 978-54-54H654q-6 0-10-4t-4-10q0-6 4-10t10-4h106L634 770H296q-13 0-21.5-8.5T266 740v-20q0-15 7.5-27.5T294 672q42-25 89.5-37.5T480 622h6L160 296v106q0 6-4 10t-10 4q-6 0-10-4t-4-10V268l-32-32q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Zm-14-228v62l-28-28v-34q0-6 4-10t10-4q6 0 10 4t4 10ZM192 924q-26 0-43-17t-17-43V750q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm608-522V288q0-12-10-22t-22-10H654q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10ZM244 228h62q6 0 10 4t4 10q0 6-4 10t-10 4h-34l-28-28Zm330 248q0 17-5.5 32.5T552 536L420 404q12-11 27.5-16.5T480 382q38 0 66 28t28 66Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffW100Filled.displayName = 'AmauiIconMaterialFramePersonOffW100Filled';

export default IconMaterialFramePersonOffW100Filled;
