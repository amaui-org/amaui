import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYoutubeSearchedFor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedFor'

      short_name='YoutubeSearchedFor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 13.65q.4.15.825.25.425.1.875.1 1.875 0 3.188-1.312Q15.5 11.375 15.5 9.5q0-1.875-1.312-3.188Q12.875 5 11 5 9.275 5 8.012 6.162 6.75 7.325 6.55 9.05l.575-.575q.275-.275.687-.263.413.013.688.288.275.275.275.7 0 .425-.275.7l-2.3 2.3q-.275.275-.7.275-.425 0-.7-.275L2.475 9.875Q2.2 9.6 2.213 9.188q.012-.413.287-.688.3-.3.713-.312.412-.013.712.287l.625.625q.15-2.575 2-4.338Q8.4 3 11 3q2.725 0 4.613 1.887Q17.5 6.775 17.5 9.5q0 1.05-.325 2.05-.325 1-.975 1.75l5.625 5.625q.275.275.263.687-.013.413-.288.688-.275.275-.7.275-.425 0-.7-.275l-5.6-5.6q-.8.65-1.775.975Q12.05 16 11 16q-.7 0-1.35-.137-.65-.138-1.225-.388-.4-.175-.5-.575-.1-.4.1-.8.2-.35.537-.475.338-.125.738.025Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedFor.displayName = 'AmauiIconMaterialYoutubeSearchedFor';

export default IconMaterialYoutubeSearchedFor;
