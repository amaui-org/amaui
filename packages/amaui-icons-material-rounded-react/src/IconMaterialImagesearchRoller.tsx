import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImagesearchRoller = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRoller'

      short_name='ImagesearchRoller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 23h-4q-.425 0-.712-.288Q10 22.425 10 22v-6q0-.425.288-.713Q10.575 15 11 15h1v-3H4q-.825 0-1.412-.588Q2 10.825 2 10V6q0-.825.588-1.412Q3.175 4 4 4h2V3q0-.425.287-.713Q6.575 2 7 2h12q.425 0 .712.287Q20 2.575 20 3v4q0 .425-.288.713Q19.425 8 19 8H7q-.425 0-.713-.287Q6 7.425 6 7V6H4v4h8q.825 0 1.413.587Q14 11.175 14 12v3h1q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712Q15.425 23 15 23ZM8 4v2Zm4 17h2v-4h-2ZM8 6h10V4H8Zm4 15h2-2Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRoller.displayName = 'AmauiIconMaterialImagesearchRoller';

export default IconMaterialImagesearchRoller;
