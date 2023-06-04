import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmbShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareW100'

      short_name='SmbShare'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M449 600h185q17 0 29-12t12-29q0-17-12-29.5T634 517h-28l-4-25q-3-25-22.5-42.5T534 432q-21 0-37 11t-25 29l-8 16-19 1q-22 2-37 17t-15 38q0 23 16.5 39.5T449 600ZM152 872q-26 0-43-17t-17-43V458q0-6 4-10t10-4q6 0 10 4t4 10v354q0 12 10 22t22 10h584q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-26 0-43-17t-17-43V288q0-26 17-43t43-17h195q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v376q0 26-17 43t-43 17H260Zm0-28h548q12 0 22-10t10-22V328q0-12-10-22t-22-10H508l-40-40H260q-14 0-23 9t-9 23v416q0 12 10 22t22 10Zm-32 0V256v480Z"/>
    </Icon>
  );
});

IconMaterialSmbShareW100.displayName = 'AmauiIconMaterialSmbShareW100';

export default IconMaterialSmbShareW100;
