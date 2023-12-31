import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteW100Filled'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v361q0 12.444-5 23.722T770-324L636-190q-8 8-19.278 13-11.278 5-23.722 5H232Zm368-28 160-160h-80q-33 0-56.5 23.5T600-280v80ZM480.035-346q5.965 0 9.965-4.025t4-9.975v-226h106q5.95 0 9.975-4.035 4.025-4.035 4.025-10T609.975-610q-4.025-4-9.975-4H360q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h106v226q0 5.95 4.035 9.975 4.035 4.025 10 4.025Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteW100Filled.displayName = 'AmauiIconMaterialStickyNoteW100Filled';

export default IconMaterialStickyNoteW100Filled;
