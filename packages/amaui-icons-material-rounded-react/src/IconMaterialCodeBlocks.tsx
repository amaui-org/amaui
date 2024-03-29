import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeBlocks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocks'

      short_name='CodeBlocks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.825 12 1.475-1.475q.3-.3.3-.7 0-.4-.3-.7-.3-.3-.712-.3-.413 0-.713.3L6.7 11.3q-.15.15-.212.325-.063.175-.063.375t.063.375q.062.175.212.325l2.175 2.175q.3.3.713.3.412 0 .712-.3t.3-.7q0-.4-.3-.7Zm6.35 0L13.7 13.475q-.3.3-.3.7 0 .4.3.7.3.3.713.3.412 0 .712-.3L17.3 12.7q.15-.15.212-.325.063-.175.063-.375t-.063-.375q-.062-.175-.212-.325l-2.175-2.175q-.15-.15-.337-.225-.188-.075-.375-.075-.188 0-.375.075-.188.075-.338.225-.3.3-.3.7 0 .4.3.7ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocks.displayName = 'AmauiIconMaterialCodeBlocks';

export default IconMaterialCodeBlocks;
