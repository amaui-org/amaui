import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvStationFilled'

      short_name='EvStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.025 18.15 1.7-2.725q.1-.125.025-.275-.075-.15-.25-.15h-1v-2q0-.225-.2-.288-.2-.062-.325.138l-1.7 2.725q-.1.125-.025.275.075.15.25.15h1v2q0 .225.2.288.2.062.325-.138ZM6 10h6V5H6ZM5 21q-.425 0-.713-.288Q4 20.425 4 20V5q0-.825.588-1.413Q5.175 3 6 3h6q.825 0 1.413.587Q14 4.175 14 5v7h1q.825 0 1.413.587Q17 13.175 17 14v4.5q0 .425.35.712.35.288.775.288.45 0 .788-.288.337-.287.337-.712V9H19q-.425 0-.712-.288Q18 8.425 18 8V6.5q0-.2.15-.35.15-.15.35-.15V5q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35v1h1V5q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35v1q.2 0 .35.15.15.15.15.35V8q0 .425-.288.712Q21.425 9 21 9h-.25v9.5q0 1.05-.762 1.775-.763.725-1.863.725-1.075 0-1.85-.725-.775-.725-.775-1.775v-5H14V20q0 .425-.287.712Q13.425 21 13 21Z"/>
    </Icon>
  );
});

IconMaterialEvStationFilled.displayName = 'AmauiIconMaterialEvStationFilled';

export default IconMaterialEvStationFilled;
