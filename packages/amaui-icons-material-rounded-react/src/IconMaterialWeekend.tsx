import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Weekend'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v2q1.25 0 2.125.875T23 12v5q0 1.25-.875 2.125T20 20H4q-1.25 0-2.125-.875T1 17v-5q0-1.25.875-2.125T4 9Zm2 0v2.8q.45.425.725.975Q7 11.325 7 12v2h10v-2q0-.675.275-1.225T18 9.8V7q0-.425-.288-.713Q17.425 6 17 6H7q-.425 0-.713.287Q6 6.575 6 7Zm13 9H5v-4q0-.2-.075-.388-.075-.187-.212-.325-.138-.137-.325-.212Q4.2 11 4 11q-.425 0-.712.287Q3 11.575 3 12v5q0 .425.288.712Q3.575 18 4 18h16q.425 0 .712-.288Q21 17.425 21 17v-5q0-.425-.288-.713Q20.425 11 20 11q-.2 0-.387.075-.188.075-.325.212-.138.138-.213.325Q19 11.8 19 12Zm-7 0Zm0 2Zm0-4Z"/>
    </Icon>
  );
});

IconMaterialWeekend.displayName = 'AmauiIconMaterialWeekend';

export default IconMaterialWeekend;
