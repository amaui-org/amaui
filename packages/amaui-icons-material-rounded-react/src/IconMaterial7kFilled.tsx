import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kFilled'

      short_name='7k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 15q.325 0 .538-.213.212-.212.212-.537v-1.5l1.525 1.95q.1.125.238.212.137.088.312.088.475 0 .663-.425.187-.425-.088-.775l-1.4-1.8 1.45-1.85q.275-.35.063-.75-.213-.4-.638-.4-.175 0-.325.075-.15.075-.275.225L14.5 11.25V9.725q0-.3-.212-.513Q14.075 9 13.75 9q-.325 0-.537.212Q13 9.425 13 9.75v4.525q0 .3.213.512.212.213.537.213Zm-4.9 0q.275 0 .5-.15.225-.15.325-.425L10.95 10.3q.15-.5-.15-.9T10 9H7.225q-.3 0-.512.212-.213.213-.213.538 0 .325.213.537.212.213.537.213h1.9l-1.075 3.45q-.125.4.113.725.237.325.662.325ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterial7kFilled.displayName = 'AmauiIconMaterial7kFilled';

export default IconMaterial7kFilled;
