import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusNoteW100Filled'

      short_name='StylusNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234-228q-72-5-110-36t-38-84q0-54 47-87.5T264-477q51-5 76.5-21t25.5-44q0-35-29.5-54.5T241-624l3-27q75 10 112.5 37t37.5 72q0 39-33.5 63.5T266-449q-76 7-114 32t-38 69q0 41 29.5 63.5T234-256v28Zm249-23-92-92 371-371 92 92-371 371Zm-20 20-116 24 24-116 92 92Z"/>
    </Icon>
  );
});

IconMaterialStylusNoteW100Filled.displayName = 'AmauiIconMaterialStylusNoteW100Filled';

export default IconMaterialStylusNoteW100Filled;
