import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffFilled'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 12q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm4.15 2H7q-.425 0-.713.287Q6 14.575 6 15t.287.712Q6.575 16 7 16h6.15Zm10.6 4.9-6.9-6.9H17q.425 0 .712-.288Q18 11.425 18 11t-.288-.713Q17.425 10 17 10h-4.15l-6-6H20q.825 0 1.413.588Q22 5.175 22 6v11.9q0 .275-.05.525t-.2.475Zm-1.9 3.75L17.15 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4l8 8H9.2L1.35 4.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.5 18.5q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffFilled.displayName = 'AmauiIconMaterialSubtitlesOffFilled';

export default IconMaterialSubtitlesOffFilled;
