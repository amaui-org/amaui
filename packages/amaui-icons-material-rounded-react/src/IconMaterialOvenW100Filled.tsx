import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenW100Filled'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-608v-120q0-26 17-43t43-17h496q26 0 43 17t17 43v120H172Zm60 436q-26 0-43-17t-17-43v-348h616v348q0 26-17 43t-43 17H232Zm88-488q17 0 28.5-11.5T360-700q0-17-11.5-28.5T320-740q-17 0-28.5 11.5T280-700q0 17 11.5 28.5T320-660Zm120 220h80q8.5 0 14.25-5.75T540-460q0-8.5-5.75-14.25T520-480h-80q-8.5 0-14.25 5.75T420-460q0 8.5 5.75 14.25T440-440Zm40-220q17 0 28.5-11.5T520-700q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Zm160 0q17 0 28.5-11.5T680-700q0-17-11.5-28.5T640-740q-17 0-28.5 11.5T600-700q0 17 11.5 28.5T640-660Z"/>
    </Icon>
  );
});

IconMaterialOvenW100Filled.displayName = 'AmauiIconMaterialOvenW100Filled';

export default IconMaterialOvenW100Filled;
