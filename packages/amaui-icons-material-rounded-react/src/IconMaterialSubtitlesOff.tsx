import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOff'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 12q-.425 0-.713-.288Q6 11.425 6 11t.287-.713Q6.575 10 7 10t.713.287Q8 10.575 8 11t-.287.712Q7.425 12 7 12Zm7.85 0-2-2H17q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 12 17 12Zm5 10.65L17.15 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4l2 2H4v12h11.15l-2-2H7q-.425 0-.713-.288Q6 15.425 6 15t.287-.713Q6.575 14 7 14h4.15l-9.8-9.85q-.275-.275-.288-.688-.012-.412.288-.712.275-.275.7-.275.425 0 .7.275l18.5 18.5q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275Zm1.9-3.75L20 17.15V6H8.85l-2-2H20q.825 0 1.413.588Q22 5.175 22 6v11.9q0 .275-.05.525t-.2.475Zm-7.325-7.325Zm-4.85.85Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOff.displayName = 'AmauiIconMaterialSubtitlesOff';

export default IconMaterialSubtitlesOff;
