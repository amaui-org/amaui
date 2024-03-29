import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4k'

      short_name='4k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 15q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.238.212.137.088.312.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L14.5 11.25V9.725q0-.3-.212-.513Q14.075 9 13.75 9q-.325 0-.537.212Q13 9.425 13 9.75v4.525q0 .3.213.512.212.213.537.213Zm-3.5 0q.325 0 .538-.213.212-.212.212-.537v-.75h.275q.3 0 .513-.213.212-.212.212-.537 0-.325-.212-.538Q11.575 12 11.25 12H11V9.725q0-.3-.212-.513Q10.575 9 10.25 9q-.325 0-.537.212-.213.213-.213.538V12H8V9.725q0-.3-.213-.513Q7.575 9 7.25 9q-.325 0-.537.212-.213.213-.213.538v2.75q0 .425.287.712.288.288.713.288h2v.775q0 .3.213.512.212.213.537.213ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterial4k.displayName = 'AmauiIconMaterial4k';

export default IconMaterial4k;
