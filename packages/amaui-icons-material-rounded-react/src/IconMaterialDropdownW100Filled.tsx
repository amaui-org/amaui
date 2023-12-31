import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DropdownW100Filled'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-492h168q13 0 21.5-8.5T720-522v-168q0-13-8.5-21.5T690-720H522q-13 0-21.5 8.5T492-690v168q0 13 8.5 21.5T522-492ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialDropdownW100Filled.displayName = 'AmauiIconMaterialDropdownW100Filled';

export default IconMaterialDropdownW100Filled;
