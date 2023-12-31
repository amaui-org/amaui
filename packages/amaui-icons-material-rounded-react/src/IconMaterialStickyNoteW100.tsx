import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNoteW100'

      short_name='StickyNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v361q0 12-5 23.5T770-324L636-190q-8 8-19.5 13t-23.5 5H232Zm368-28v-80q0-33 23.5-56.5T680-360h80v-368q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h368ZM466-586v226q0 6 4 10t10 4q6 0 10-4t4-10v-226h106q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4h106Zm134 386Zm-400 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNoteW100.displayName = 'AmauiIconMaterialStickyNoteW100';

export default IconMaterialStickyNoteW100;
