import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial8k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8k'

      short_name='8k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 15q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.238.212.137.088.312.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L14.5 11.25V9.725q0-.3-.212-.513Q14.075 9 13.75 9q-.325 0-.537.212Q13 9.425 13 9.75v4.525q0 .3.213.512.212.213.537.213ZM7.5 15H10q.425 0 .713-.288Q11 14.425 11 14v-4q0-.425-.287-.713Q10.425 9 10 9H7.5q-.425 0-.713.287Q6.5 9.575 6.5 10v4q0 .425.287.712.288.288.713.288Zm.5-3.5V10h1.5v1.5ZM8 14v-1.5h1.5V14Zm-3 7q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterial8k.displayName = 'AmauiIconMaterial8k';

export default IconMaterial8k;
