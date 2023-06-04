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
      <path d="M19.775 22.625 18.15 21H3V5.85L1.375 4.225 2.8 2.8l18.4 18.4ZM21 18.15l-2-2V5h-2v9.15l-4-4V5h-2v3.15L5.85 3H21ZM5 19h3.25v-4.5H7V9.85l-2-2Zm4.75 0h4.5v-1.9l-3.3-3.3v.7h-1.2Zm6 0h.4l-.4-.4Z"/>
    </Icon>
  );
});

IconMaterialPianoOff.displayName = 'AmauiIconMaterialPianoOff';

export default IconMaterialPianoOff;
