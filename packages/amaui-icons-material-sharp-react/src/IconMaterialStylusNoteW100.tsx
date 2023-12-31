import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusNoteW100'

      short_name='StylusNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m469-277 345-345-52-52-345 345 52 52Zm-235 49q-72-5-110-36t-38-84q0-54 47-87.5T264-477q51-5 76.5-21t25.5-44q0-35-29.5-54.5T241-624l3-27q75 10 112.5 37t37.5 72q0 39-33.5 63.5T266-449q-76 7-114 32t-38 69q0 41 29.5 63.5T234-256v28Zm229-3-92-92 391-391 92 92-391 391Zm0 0-116 24 24-116 92 92Z"/>
    </Icon>
  );
});

IconMaterialStylusNoteW100.displayName = 'AmauiIconMaterialStylusNoteW100';

export default IconMaterialStylusNoteW100;
