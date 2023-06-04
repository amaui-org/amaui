import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSavingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100'

      short_name='Savings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 10.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q16.275 9.3 16 9.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213ZM8 8.35h5v-.7H8ZM5.475 19.7q-.725-2.625-1.15-4.262-.425-1.638-.65-2.713-.225-1.075-.3-1.775-.075-.7-.075-1.45 0-1.75 1.225-2.975T7.5 5.3h5.65q.675-.9 1.55-1.45.875-.55 1.8-.55.075 0 .137.062.063.063.063.138 0 .025-.012.037-.013.013-.013.063-.125.325-.25.775t-.275 1.3L19.275 8.8H20.7v4.725l-2.575.85-1.6 5.325H13.3v-2H8.7v2ZM6 19h2v-2h6v2h2l1.55-5.15 2.45-.825V9.5h-1L15.5 6q0-.425.075-.95.075-.525.225-.925-.65.175-1.238.725-.587.55-.887 1.15H7.5Q6.05 6 5.025 7.025 4 8.05 4 9.5q0 1.025.525 3.512Q5.05 15.5 6 19Zm6-7.45Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100.displayName = 'AmauiIconMaterialSavingsW100';

export default IconMaterialSavingsW100;
