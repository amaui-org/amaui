import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenW100'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-660q17 0 28.5-11.5T680-700q0-17-11.5-28.5T640-740q-17 0-28.5 11.5T600-700q0 17 11.5 28.5T640-660Zm-160 0q17 0 28.5-11.5T520-700q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Zm-160 0q17 0 28.5-11.5T360-700q0-17-11.5-28.5T320-740q-17 0-28.5 11.5T280-700q0 17 11.5 28.5T320-660Zm-120 80v348q0 12 10 22t22 10h496q12 0 22-10t10-22v-348H200Zm240 140h80q8.5 0 14.25-5.75T540-460q0-8.5-5.75-14.25T520-480h-80q-8.5 0-14.25 5.75T420-460q0 8.5 5.75 14.25T440-440ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-408Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialOvenW100.displayName = 'AmauiIconMaterialOvenW100';

export default IconMaterialOvenW100;
