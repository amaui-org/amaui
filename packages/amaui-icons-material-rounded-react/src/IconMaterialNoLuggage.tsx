import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggage'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16.125-2-2V8h-6.125l-2-2H9V3q0-.425.288-.713Q9.575 2 10 2h4q.425 0 .713.287Q15 2.575 15 3v3h2q.825 0 1.413.588Q19 7.175 19 8Zm-3-3-1.5-1.5V9.75q0-.325.213-.538Q14.925 9 15.25 9q.325 0 .538.212.212.213.212.538ZM10.5 6h3V3.5h-3ZM8 22q-.425 0-.713-.288Q7 21.425 7 21q-.825 0-1.412-.587Q5 19.825 5 19V8q0-.625.338-1.113.337-.487.862-.712L8.025 8H7v11h10v-2.025l2 2V19q0 .825-.587 1.413Q17.825 21 17 21q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22Zm11.775.575L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM8.75 18q-.325 0-.537-.212Q8 17.575 8 17.25V7.975l1.5 1.5v7.775q0 .325-.212.538Q9.075 18 8.75 18ZM12 18q-.325 0-.537-.212-.213-.213-.213-.538v-6.025l1.5 1.5v4.525q0 .325-.212.538Q12.325 18 12 18Zm3.25 0q-.325 0-.537-.212-.213-.213-.213-.538v-2.775l1.5 1.5v1.275q0 .325-.212.538-.213.212-.538.212Zm-1.3-6.95ZM11.6 14.4Z"/>
    </Icon>
  );
});

IconMaterialNoLuggage.displayName = 'AmauiIconMaterialNoLuggage';

export default IconMaterialNoLuggage;
