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
      <path d="m469-277 328-328q7-7 7-17t-7-17l-18-18q-7-7-17-7t-17 7L417-329l52 52Zm-355-71q0 38 26 60t80 30q6 1 10 5.5t4 10.5q0 6-4.5 10t-9.5 3q-65-8-99.5-38T86-348q0-54 47-87.5T264-477q51-5 76.5-21t25.5-44q0-33-25.5-52T257-622q-6-1-11-5t-4-10q1-6 6.5-10t12.5-2q66 11 99.5 38t33.5 69q0 39-33.5 63.5T266-449q-76 7-114 32t-38 69Zm349 117-92-92 360-359q14-14 31.5-13.5T794-682l28 28q14 14 14 32t-14 32L463-231Zm-93 19q-8 2-14-4t-4-14l19-93 92 92-93 19Z"/>
    </Icon>
  );
});

IconMaterialStylusNoteW100.displayName = 'AmauiIconMaterialStylusNoteW100';

export default IconMaterialStylusNoteW100;
