import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subtitles'

      short_name='Subtitles'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 12q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0 4h6q.425 0 .713-.288Q14 15.425 14 15t-.287-.713Q13.425 14 13 14H7q-.425 0-.713.287Q6 14.575 6 15t.287.712Q6.575 16 7 16Zm10 0q.425 0 .712-.288Q18 15.425 18 15t-.288-.713Q17.425 14 17 14t-.712.287Q16 14.575 16 15t.288.712Q16.575 16 17 16Zm-6-4h6q.425 0 .712-.288Q18 11.425 18 11t-.288-.713Q17.425 10 17 10h-6q-.425 0-.712.287Q10 10.575 10 11t.288.712Q10.575 12 11 12Zm-7 8q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialSubtitles.displayName = 'AmauiIconMaterialSubtitles';

export default IconMaterialSubtitles;
