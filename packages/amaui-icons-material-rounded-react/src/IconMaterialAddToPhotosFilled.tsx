import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToPhotosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotosFilled'

      short_name='AddToPhotos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 14q.425 0 .713-.288Q15 13.425 15 13v-2h2q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-2V7q0-.425-.287-.713Q14.425 6 14 6t-.712.287Q13 6.575 13 7v2h-2q-.425 0-.712.287Q10 9.575 10 10t.288.712Q10.575 11 11 11h2v2q0 .425.288.712.287.288.712.288Zm-6 4q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotosFilled.displayName = 'AmauiIconMaterialAddToPhotosFilled';

export default IconMaterialAddToPhotosFilled;
