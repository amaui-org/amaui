import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibrary'

      short_name='PhotoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.025 14h7.95q.325 0 .463-.275.137-.275-.063-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2l-1.9 2.475L12.1 11q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525.138.275.463.275ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialPhotoLibrary.displayName = 'AmauiIconMaterialPhotoLibrary';

export default IconMaterialPhotoLibrary;
