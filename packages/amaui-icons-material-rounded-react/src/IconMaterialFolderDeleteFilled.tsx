import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteFilled'

      short_name='FolderDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 17h2q.625 0 1.062-.438Q18 16.125 18 15.5v-4h.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q18.575 10 18.25 10H16.5v-.25q0-.325-.212-.538Q16.075 9 15.75 9h-.5q-.325 0-.537.212-.213.213-.213.538V10h-1.75q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213H13v4q0 .625.438 1.062.437.438 1.062.438Zm0-1.5v-4h2v4ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteFilled.displayName = 'AmauiIconMaterialFolderDeleteFilled';

export default IconMaterialFolderDeleteFilled;
