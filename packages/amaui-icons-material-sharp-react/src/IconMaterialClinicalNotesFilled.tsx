import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClinicalNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotesFilled'

      short_name='ClinicalNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 16q-1.25 0-2.125-.875T14 13q0-1.25.875-2.125T17 10q1.25 0 2.125.875T20 13q0 1.25-.875 2.125T17 16Zm-6 7v-4.275q1.05-.6 2.15-1 1.1-.4 2.3-.6L17 19l1.55-1.875q1.2.15 2.3.575 1.1.425 2.15 1V23Zm-2-2H3V3h18v7q-.775-.975-1.75-1.488Q18.275 8 17 8V7H7v2h7q-.5.4-.9.9t-.675 1.1H7v2h5q0 .525.113 1.025.112.5.312.975H7v2h2Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesFilled.displayName = 'AmauiIconMaterialClinicalNotesFilled';

export default IconMaterialClinicalNotesFilled;
