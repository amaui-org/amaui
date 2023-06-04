import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGardenCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartW100'

      short_name='GardenCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 18.275q-.5 0-.8-.337-.3-.338-.3-.838V9.275L4.675 5.55H3.25q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.4q.225 0 .412.125.188.125.288.325l1.3 3h12.6q.425 0 .65.362.225.363.025.738l-2.275 4.475q.875.05 1.463.687.587.638.587 1.513 0 .9-.638 1.55-.637.65-1.537.65-.925 0-1.562-.65-.638-.65-.638-1.55 0-.475.175-.887.175-.413.5-.713l-5.1-.45-2.35 3.5q-.2.3-.5.525-.3.225-.65.225Zm9.45-4.4L19.325 9 6.95 9.025 8.25 12q.2.5.675.837.475.338 1.2.413ZM7.4 17.55q.25 0 .575-.425l2.15-3.175q-.95-.125-1.575-.525t-.95-1.15l-.6-1.4V17.1q0 .2.1.325t.3.125Zm10.1.05q.65 0 1.075-.437Q19 16.725 19 16.1q0-.65-.425-1.075-.425-.425-1.075-.425-.625 0-1.062.425Q16 15.45 16 16.1q0 .625.438 1.063.437.437 1.062.437Zm-.65-3.725-6.725-.625 6.725.625Z"/>
    </Icon>
  );
});

IconMaterialGardenCartW100.displayName = 'AmauiIconMaterialGardenCartW100';

export default IconMaterialGardenCartW100;
