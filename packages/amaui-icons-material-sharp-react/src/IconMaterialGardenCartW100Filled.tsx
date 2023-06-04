import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGardenCartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartW100Filled'

      short_name='GardenCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.2 18.275h-.9v-9L4.675 5.55H2.9v-.7h2.25l1.5 3.45h13.825l-2.825 5.575q.875.05 1.463.687.587.638.587 1.513 0 .9-.638 1.55-.637.65-1.537.65-.925 0-1.562-.65-.638-.65-.638-1.55 0-.475.175-.887.175-.413.5-.713l-5.1-.45Zm-.2-7.4v6.675l3.125-3.6-1.85-.175ZM17.5 17.6q.65 0 1.075-.437Q19 16.725 19 16.1q0-.65-.425-1.075-.425-.425-1.075-.425-.625 0-1.062.425Q16 15.45 16 16.1q0 .625.438 1.063.437.437 1.062.437Z"/>
    </Icon>
  );
});

IconMaterialGardenCartW100Filled.displayName = 'AmauiIconMaterialGardenCartW100Filled';

export default IconMaterialGardenCartW100Filled;
