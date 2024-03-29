import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShare'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 19q-.825 0-1.412-.587Q8 17.825 8 17V3q0-.825.588-1.413Q9.175 1 10 1h8q.825 0 1.413.587Q20 2.175 20 3v14q0 .825-.587 1.413Q18.825 19 18 19Zm8-13h-8v8h8Zm-8-2h8V3h-8Zm8 12h-8v1h8ZM6 23q-.825 0-1.412-.587Q4 21.825 4 21V6q0-.425.287-.713Q4.575 5 5 5t.713.287Q6 5.575 6 6v15h9q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 23 15 23Zm5.75-11q-.325 0-.537-.213Q11 11.575 11 11.25v-1.5q0-.425.288-.713.287-.287.712-.287h2.15l-.175-.175q-.225-.225-.225-.525 0-.3.225-.525.225-.225.525-.225.3 0 .525.225L16.3 8.8q.15.15.212.325.063.175.063.375t-.063.375q-.062.175-.212.325l-1.275 1.275q-.225.225-.525.225-.3 0-.525-.225-.225-.225-.225-.525 0-.3.225-.525l.175-.175H12.5v1q0 .325-.212.537-.213.213-.538.213ZM10 3v1-1Zm0 13v1Z"/>
    </Icon>
  );
});

IconMaterialOfflineShare.displayName = 'AmauiIconMaterialOfflineShare';

export default IconMaterialOfflineShare;
