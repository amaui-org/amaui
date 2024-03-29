import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownload'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V8.825q0-.4.15-.763.15-.362.425-.637l4.85-4.85q.275-.275.637-.425.363-.15.763-.15H18q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V4h-7.15L6 8.85V20Zm6-3.425q.2 0 .375-.063.175-.062.325-.212l2.625-2.625Q15.6 13.4 15.6 13t-.3-.7q-.275-.275-.687-.275-.413 0-.713.275l-.9.85V10q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10v3.15l-.9-.875Q9.8 12 9.4 12q-.4 0-.7.3-.275.275-.275.7 0 .425.275.7l2.6 2.6q.15.15.325.212.175.063.375.063ZM6 20h12Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownload.displayName = 'AmauiIconMaterialSimCardDownload';

export default IconMaterialSimCardDownload;
