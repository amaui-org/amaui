import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoteAltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteAltRoundedW100Filled'
      short_name='NoteAlt'

      {...props}
    >
      <path d="M14.6 10.15 13.85 9.4 8.175 15.075Q8.075 15.175 8.038 15.275Q8 15.375 8 15.5V15.6Q8 15.775 8.113 15.887Q8.225 16 8.4 16H8.475Q8.6 16 8.688 15.962Q8.775 15.925 8.875 15.825ZM15.1 9.65 15.85 8.9Q16 8.75 16 8.55Q16 8.35 15.85 8.2L15.8 8.15Q15.65 8 15.45 8Q15.25 8 15.1 8.15L14.35 8.9ZM5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H10.65Q10.375 3.575 10.8 2.937Q11.225 2.3 12.025 2.3Q12.8 2.3 13.225 2.937Q13.65 3.575 13.35 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM12 4.5Q12.325 4.5 12.538 4.287Q12.75 4.075 12.75 3.75Q12.75 3.425 12.538 3.212Q12.325 3 12 3Q11.675 3 11.463 3.212Q11.25 3.425 11.25 3.75Q11.25 4.075 11.463 4.287Q11.675 4.5 12 4.5Z"/>
    </Icon>
  );
});

IconMaterialNoteAltRoundedW100Filled.displayName = 'AmauiIconMaterialNoteAltRoundedW100Filled';

export default IconMaterialNoteAltRoundedW100Filled;
