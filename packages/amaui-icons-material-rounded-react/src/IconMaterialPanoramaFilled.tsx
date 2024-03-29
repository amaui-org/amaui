import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaFilled'

      short_name='Panorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 15 9.4 12.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 16 7 16Zm-3 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaFilled.displayName = 'AmauiIconMaterialPanoramaFilled';

export default IconMaterialPanoramaFilled;
