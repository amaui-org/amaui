import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxW100'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-650v418q0 14 9 23t23 9h496q14 0 23-9t9-23v-418H588v208q0 17-14 26t-29 1l-65-32-65 32q-15 8-29-1t-14-26v-208H200Zm32 478q-25 0-42.5-17.5T172-232v-417q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v414q0 25-17.5 42.5T728-172H232Zm-17-506h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 28v211l80-40 80 40v-211H400Zm-200 0h560-560Z"/>
    </Icon>
  );
});

IconMaterialBoxW100.displayName = 'AmauiIconMaterialBoxW100';

export default IconMaterialBoxW100;
