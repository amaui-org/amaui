import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataTableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableW100'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-420h560v-136q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v136Zm0 196h560v-168H200v168Zm32 196h496q12 0 22-10t10-22v-136H200v136q0 12 10 22t22 10Zm77.825-446Q297-646 288.5-654.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0 196Q297-450 288.5-458.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0 196Q297-254 288.5-262.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialDataTableW100.displayName = 'AmauiIconMaterialDataTableW100';

export default IconMaterialDataTableW100;
