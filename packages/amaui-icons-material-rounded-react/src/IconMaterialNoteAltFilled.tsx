import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltFilled'

      short_name='NoteAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.1 11.05 12.95 8.9l-5.725 5.725q-.125.125-.175.25Q7 15 7 15.15v1.35q0 .2.15.35.15.15.35.15h1.3q.15 0 .288-.05.137-.05.237-.175Zm.7-.7 1.05-1.1Q17 9.1 17 8.9q0-.2-.15-.35l-1.4-1.4Q15.3 7 15.1 7q-.2 0-.35.15l-1.1 1.05ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialNoteAltFilled.displayName = 'AmauiIconMaterialNoteAltFilled';

export default IconMaterialNoteAltFilled;
