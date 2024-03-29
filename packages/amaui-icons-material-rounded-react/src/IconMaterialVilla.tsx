import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVilla = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Villa'

      short_name='Villa'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20V8.675q0-.325.188-.562.187-.238.462-.363l11-4.225q.5-.2.925.1.425.3.425.825V12h1q0-.825.587-1.413Q18.175 10 19 10q.825 0 1.413.587Q21 11.175 21 12v8q0 .425-.288.712Q20.425 21 20 21Zm1-2h4v-6q0-.425.288-.713Q9.575 12 10 12h4V5.9L5 9.375Zm6 0h3v-2q0-.425.288-.712Q14.575 16 15 16t.713.288Q16 16.575 16 17v2h3v-5h-8Zm-4-9Zm8 9Zm0-.5Z"/>
    </Icon>
  );
});

IconMaterialVilla.displayName = 'AmauiIconMaterialVilla';

export default IconMaterialVilla;
