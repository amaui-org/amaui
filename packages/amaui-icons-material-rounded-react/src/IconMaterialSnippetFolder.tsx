import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnippetFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolder'

      short_name='SnippetFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 15.5v-5h1.375l1.625 1.625V15.5ZM14 17h4q.425 0 .712-.288Q19 16.425 19 16v-4.075q0-.2-.075-.388-.075-.187-.225-.337l-1.9-1.9q-.15-.15-.337-.225Q16.275 9 16.075 9H14q-.425 0-.712.287Q13 9.575 13 10v6q0 .425.288.712.287.288.712.288ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolder.displayName = 'AmauiIconMaterialSnippetFolder';

export default IconMaterialSnippetFolder;
