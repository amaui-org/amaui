import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWysiwyg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wysiwyg'

      short_name='Wysiwyg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V7H5v12Zm3-7q-.425 0-.713-.288Q7 11.425 7 11t.287-.713Q7.575 10 8 10h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 12 16 12Zm0 4q-.425 0-.713-.288Q7 15.425 7 15t.287-.713Q7.575 14 8 14h4q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWysiwyg.displayName = 'AmauiIconMaterialWysiwyg';

export default IconMaterialWysiwyg;
