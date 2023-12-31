import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveW100'

      short_name='FileSave'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m706-209-81-81q-4-4-9-4t-9 4q-4 4-4 9.667 0 5.666 4 9.333l92 93q9 9 21 9t21-9l93-93q4-3.667 4-9.333 0-5.667-4-9.667t-9.667-4q-5.666 0-9.333 4l-81 81v-190q0-5.95-4.035-9.975-4.035-4.025-10-4.025T710-408.975q-4 4.025-4 9.975v190ZM600-54h240q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975-30q-4.025 4-9.975 4H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T590.025-50q4.025-4 9.975-4ZM246-186q-24 0-42-18t-18-42v-548q0-24 18-42t42-18h249q12.444 0 23.722 5T538-836l178 178q8 8 13 19.278 5 11.278 5 23.722v88q0 5.95-4.035 9.975-4.035 4.025-10 4.025T710-517.025q-4-4.025-4-9.975v-99H551q-18.75 0-31.875-13.125T506-671v-155H246q-12 0-22 10t-10 22v548q0 12 10 22t22 10h226q5.95 0 9.975 4.035 4.025 4.035 4.025 10T481.975-190q-4.025 4-9.975 4H246Zm-32-28v-612 612Z"/>
    </Icon>
  );
});

IconMaterialFileSaveW100.displayName = 'AmauiIconMaterialFileSaveW100';

export default IconMaterialFileSaveW100;
