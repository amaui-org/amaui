import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoFilled'

      short_name='Piano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h3.25v-4.5H8q-.425 0-.713-.288Q7 13.925 7 13.5V5H5v14Zm10.75 0H19V5h-2v8.5q0 .425-.288.712-.287.288-.712.288h-.25Zm-6 0h4.5v-4.5H14q-.425 0-.712-.288Q13 13.925 13 13.5V5h-2v8.5q0 .425-.287.712-.288.288-.713.288h-.25Z"/>
    </Icon>
  );
});

IconMaterialPianoFilled.displayName = 'AmauiIconMaterialPianoFilled';

export default IconMaterialPianoFilled;
