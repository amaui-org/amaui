import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureInPictureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureFilled'

      short_name='PictureInPicture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13h6q.425 0 .712-.288Q19 12.425 19 12V8q0-.425-.288-.713Q18.425 7 18 7h-6q-.425 0-.712.287Q11 7.575 11 8v4q0 .425.288.712.287.288.712.288Zm-8 7q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm11-10Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureFilled.displayName = 'AmauiIconMaterialPictureInPictureFilled';

export default IconMaterialPictureInPictureFilled;
