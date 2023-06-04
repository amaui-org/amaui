import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSourceNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SourceNotesW100Filled'

      short_name='SourceNotes'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 442h348v-28H306v28Zm414 558q-61 0-109-36.5T545 872h30q17 45 55.612 72.5Q669.223 972 720 972q64.629 0 110.314-45.686Q876 880.629 876 816q0-64.629-45.686-110.314Q784.629 660 720 660q-39 0-75 20t-62 52h81v28H536V632h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904 739.64 904 816q0 76.36-53.82 130.18Q796.36 1000 720 1000ZM172 884V268h616v252q-16.618-3.826-33.809-5.913T720 512q-47 0-89 13t-78 37H306v28h211q-27 25-48 55t-34 65H306v28h120q-5 19-7.5 38.5T416 816q0 17.374 2 34.187T424 884H172Z"/>
    </Icon>
  );
});

IconMaterialSourceNotesW100Filled.displayName = 'AmauiIconMaterialSourceNotesW100Filled';

export default IconMaterialSourceNotesW100Filled;
