import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowmobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowmobile'

      short_name='Snowmobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23.675 18.35q-.375.725-1.088 1.188Q21.875 20 21 20h-5q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h1.925l-2-2H12q0 1.65-1.175 2.825Q9.65 20 8 20H2q-.95 0-1.475-.625Q0 18.75 0 18q0-.5.25-.975t.8-.775l3.5-1.9-2.65-.775q-.8-.225-1.088-.925-.287-.7.088-1.425l.2-.45q.375-.725 1.212-1.188.838-.462 1.663-.362L11 10l3.05-2.275-.8-.725H12q-.425 0-.712-.287Q11 6.425 11 6t.288-.713Q11.575 5 12 5h1.65q.2 0 .375.062.175.063.325.213l6.825 6.35q.475.425.65.837.175.413.175.788 0 1.075-.825 1.912-.825.838-2.5.838l2.15 2H21q.275 0 .488-.113.212-.112.337-.312.2-.275.4-.425.2-.15.4-.15.625 0 .962.438.338.437.088.912ZM2 18h6q.825 0 1.413-.587Q10 16.825 10 16l-2.75-.825L2 18Zm8.3-4h8.275q.675 0 1.05-.163.375-.162.375-.587L15.525 9.1l-3.95 2.975-8.425-.925-.3.6Zm1.125-2.45Z"/>
    </Icon>
  );
});

IconMaterialSnowmobile.displayName = 'AmauiIconMaterialSnowmobile';

export default IconMaterialSnowmobile;
