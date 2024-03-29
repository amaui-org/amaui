import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOff'

      short_name='PianoOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.075 21.9-.925-.9H5q-.825 0-1.413-.587Q3 19.825 3 19V5.85l-.925-.925q-.3-.3-.3-.7 0-.4.3-.7.3-.3.713-.3.412 0 .712.3l17 16.975q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM21 18.15l-2-2V5h-2v8.5q0 .125-.038.25-.037.125-.112.25L13 10.15V5h-2v3.15L5.85 3H19q.825 0 1.413.587Q21 4.175 21 5ZM5 19h3.25v-4.5H8q-.425 0-.713-.288Q7 13.925 7 13.5V9.85l-2-2V19Zm4.75 0h4.5v-1.9l-3.3-3.3q-.1.3-.35.5-.25.2-.6.2h-.25Zm6 0h.4l-.4-.4Z"/>
    </Icon>
  );
});

IconMaterialPianoOff.displayName = 'AmauiIconMaterialPianoOff';

export default IconMaterialPianoOff;
