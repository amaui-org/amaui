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
      <path d="M17 16q-1.25 0-2.125-.875T14 13q0-1.25.875-2.125T17 10q1.25 0 2.125.875T20 13q0 1.25-.875 2.125T17 16Zm-8 4.1v.9H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v5q-.775-.975-1.75-1.488Q18.275 8 17 8q0-.425-.288-.713Q16.425 7 16 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9h6q-.5.4-.9.9t-.675 1.1H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h4q0 .525.113 1.025.112.5.312.975H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17h2.45q-.675.575-1.063 1.387Q9 19.2 9 20.1Zm3 2.9q-.425 0-.712-.288Q11 22.425 11 22v-1.9q0-.525.25-.988.25-.462.7-.737.8-.475 1.35-.663.55-.187 1.475-.337.3-.05.6.012.3.063.5.288L17 19l1.1-1.325q.2-.25.5-.3.3-.05.6 0 .925.15 1.475.337.55.188 1.35.663.45.275.713.737.262.463.262.988V22q0 .425-.288.712Q22.425 23 22 23Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesFilled.displayName = 'AmauiIconMaterialClinicalNotesFilled';

export default IconMaterialClinicalNotesFilled;
