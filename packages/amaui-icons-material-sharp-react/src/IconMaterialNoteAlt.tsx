import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAlt'

      short_name='NoteAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2.1l6-5.95-2.15-2.15L7 14.85Zm8.8-6.65 1.05-1.1Q17 9.1 17 8.9q0-.2-.15-.35l-1.4-1.4Q15.3 7 15.1 7q-.2 0-.35.15l-1.1 1.05ZM5 19h14V5H5Zm-2 2V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialNoteAlt.displayName = 'AmauiIconMaterialNoteAlt';

export default IconMaterialNoteAlt;
