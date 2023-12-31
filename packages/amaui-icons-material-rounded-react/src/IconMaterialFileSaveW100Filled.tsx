import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100Filled'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m699-178-92-92q-4-3.667-4-9.333 0-5.667 4-9.667t9-4.5q5-.5 9 3.5l81 81v-190q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v190l81-81q3.667-4 9.333-4 5.667 0 9.667 4t4 9.667q0 5.666-4 9.333l-93 93q-9 9-21 9t-21-9ZM600-26q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T590.025-50q4.025-4 9.975-4h240q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975-30q-4.025 4-9.975 4H600ZM246-186q-24 0-42-18t-18-42v-548q0-24 18-42t42-18h249q12.444 0 23.722 5T538-836l178 178q8 8 13 19.278 5 11.278 5 23.722v72q0 12.75-8.625 21.375T704-513H546q-24.75 0-42.375 17.625T486-453v237q0 12.75-8.625 21.375T456-186H246Zm305-440h155L506-826l200 200-200-200v155q0 18.75 13.125 31.875T551-626Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100Filled.displayName = 'AmauiIconMaterialFileSaveW100Filled';

export default IconMaterialFileSaveW100Filled;
