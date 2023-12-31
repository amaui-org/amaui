import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DropdownW100'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-492h168q13 0 21.5-8.5T720-522v-168q0-13-8.5-21.5T690-720H522q-13 0-21.5 8.5T492-690v168q0 13 8.5 21.5T522-492ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialDropdownW100.displayName = 'AmauiIconMaterialDropdownW100';

export default IconMaterialDropdownW100;
