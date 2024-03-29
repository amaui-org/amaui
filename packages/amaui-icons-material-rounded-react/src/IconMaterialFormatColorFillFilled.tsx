import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorFillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillFilled'

      short_name='FormatColorFill'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16.75q-.4 0-.762-.15-.363-.15-.663-.425l-4.75-4.75q-.275-.3-.425-.663-.15-.362-.15-.762t.15-.775q.15-.375.425-.65L8.575 3.8l-1.7-1.7Q6.6 1.825 6.6 1.412 6.6 1 6.9.7q.3-.275.7-.288Q8 .4 8.3.7l7.875 7.875q.3.275.438.65.137.375.137.775t-.137.762q-.138.363-.438.663l-4.75 4.75q-.275.275-.65.425-.375.15-.775.15Zm0-11.525L5.225 10h9.55ZM19 17q-.825 0-1.413-.587Q17 15.825 17 15q0-.525.312-1.125.313-.6.688-1.125.225-.3.475-.625.25-.325.525-.625.275.3.525.625t.475.625q.375.525.688 1.125.312.6.312 1.125 0 .825-.587 1.413Q19.825 17 19 17ZM4 24q-.825 0-1.412-.587Q2 22.825 2 22q0-.825.588-1.413Q3.175 20 4 20h16q.825 0 1.413.587Q22 21.175 22 22q0 .825-.587 1.413Q20.825 24 20 24Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillFilled.displayName = 'AmauiIconMaterialFormatColorFillFilled';

export default IconMaterialFormatColorFillFilled;
