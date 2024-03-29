import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOff'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.75 18.925 20 17.175V8h-8.825l-2-2h-.35l-2-2H10l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .275-.062.5-.063.225-.188.425ZM19.775 22.6l-2.6-2.6H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4l2 2H4v12h11.175L1.4 4.2q-.275-.275-.287-.688Q1.1 3.1 1.4 2.8q.275-.275.7-.275.425 0 .7.275l18.4 18.4q.3.3.288.7-.013.4-.313.7-.3.275-.7.287-.4.013-.7-.287Zm-10.2-10.2Zm4.8-.85Z"/>
    </Icon>
  );
});

IconMaterialFolderOff.displayName = 'AmauiIconMaterialFolderOff';

export default IconMaterialFolderOff;
