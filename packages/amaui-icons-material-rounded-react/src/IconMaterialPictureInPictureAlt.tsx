import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAlt'

      short_name='PictureInPictureAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17h6q.425 0 .712-.288Q19 16.425 19 16v-4q0-.425-.288-.713Q18.425 11 18 11h-6q-.425 0-.712.287Q11 11.575 11 12v4q0 .425.288.712.287.288.712.288Zm-8 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Zm9-3v-2h4v2Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAlt.displayName = 'AmauiIconMaterialPictureInPictureAlt';

export default IconMaterialPictureInPictureAlt;
