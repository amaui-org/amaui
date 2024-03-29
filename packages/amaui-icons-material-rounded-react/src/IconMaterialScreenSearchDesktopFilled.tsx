import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopFilled'

      short_name='ScreenSearchDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.925 14.525q.225.225.538.213.312-.013.537-.238.225-.225.225-.538 0-.312-.225-.537L14.45 11.9q.275-.425.413-.9.137-.475.137-1 0-1.475-1.037-2.488Q12.925 6.5 11.5 6.5T9.038 7.512Q8 8.525 8 10t1.038 2.488Q10.075 13.5 11.5 13.5q.525 0 .988-.113.462-.112.912-.387ZM11.5 12q-.825 0-1.412-.588Q9.5 10.825 9.5 10t.588-1.413Q10.675 8 11.5 8q.8 0 1.4.587.6.588.6 1.413 0 .825-.587 1.412Q12.325 12 11.5 12ZM4 18q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopFilled.displayName = 'AmauiIconMaterialScreenSearchDesktopFilled';

export default IconMaterialScreenSearchDesktopFilled;
