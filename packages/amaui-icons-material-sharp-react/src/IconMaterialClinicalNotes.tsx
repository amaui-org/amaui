import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClinicalNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotes'

      short_name='ClinicalNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 16q-1.25 0-2.125-.875T14 13q0-1.25.875-2.125T17 10q1.25 0 2.125.875T20 13q0 1.25-.875 2.125T17 16Zm0-2q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12t-.712.287Q16 12.575 16 13t.288.712Q16.575 14 17 14Zm-6 9v-4.275q1.05-.6 2.15-1 1.1-.4 2.3-.6L17 19l1.55-1.875q1.2.15 2.3.575 1.1.425 2.15 1V23Zm1.975-2h3.075l-1.35-1.65q-.45.125-.875.325t-.85.425Zm4.975 0H21v-.9q-.4-.25-.825-.437-.425-.188-.875-.313Zm-1.9 0Zm1.9 0ZM9 21H3V3h18v7q-.4-.5-.875-.95-.475-.45-1.125-.6V5H5v14h4v1.1ZM7 9h7q.65-.5 1.425-.75T17 8V7H7Zm0 4h5q0-.525.113-1.025.112-.5.312-.975H7Zm0 4h3.15l1.525-.675V15H7Zm2 2H5V5h14v3.425q-.45-.2-.962-.312Q17.525 8 17 8q-2.075 0-3.537 1.462Q12 10.925 12 13q0 .775.213 1.487.212.713.637 1.313L9 17.525Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotes.displayName = 'AmauiIconMaterialClinicalNotes';

export default IconMaterialClinicalNotes;
