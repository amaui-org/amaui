import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListFilled'

      short_name='FeaturedPlayList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13h7q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11H7q-.425 0-.713.287Q6 11.575 6 12t.287.712Q6.575 13 7 13Zm0-3h7q.425 0 .713-.288Q15 9.425 15 9t-.287-.713Q14.425 8 14 8H7q-.425 0-.713.287Q6 8.575 6 9t.287.712Q6.575 10 7 10ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListFilled.displayName = 'AmauiIconMaterialFeaturedPlayListFilled';

export default IconMaterialFeaturedPlayListFilled;
