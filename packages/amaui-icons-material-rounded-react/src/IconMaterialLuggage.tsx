import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Luggage'

      short_name='Luggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V8q0-.825.588-1.412Q6.175 6 7 6h2V3q0-.425.288-.713Q9.575 2 10 2h4q.425 0 .713.287Q15 2.575 15 3v3h2q.825 0 1.413.588Q19 7.175 19 8v11q0 .825-.587 1.413Q17.825 21 17 21q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21Zm3.5-15h3V3.5h-3ZM7 19h10V8H7v11Zm1-1.75q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538v-7.5q0-.325-.212-.538Q9.075 9 8.75 9q-.325 0-.537.212Q8 9.425 8 9.75Zm3.25 0q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538v-7.5q0-.325-.212-.538Q12.325 9 12 9q-.325 0-.537.212-.213.213-.213.538Zm3.25 0q0 .325.213.538.212.212.537.212.325 0 .538-.212.212-.213.212-.538v-7.5q0-.325-.212-.538Q15.575 9 15.25 9q-.325 0-.537.212-.213.213-.213.538ZM7 19V8v11Z"/>
    </Icon>
  );
});

IconMaterialLuggage.displayName = 'AmauiIconMaterialLuggage';

export default IconMaterialLuggage;
