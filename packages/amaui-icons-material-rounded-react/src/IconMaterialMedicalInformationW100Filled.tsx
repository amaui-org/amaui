import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalInformationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationW100Filled'

      short_name='MedicalInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 15.35V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-1.65h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8.6V13q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H6.25q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm10.1-1.1q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-2 2.2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM13.7 8.3h5.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V9.8q0-.65.425-1.075Q4.15 8.3 4.8 8.3h5.5V4q0-.3.2-.5t.5-.2h2q.3 0 .5.2t.2.5ZM11 9h2V4h-2Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationW100Filled.displayName = 'AmauiIconMaterialMedicalInformationW100Filled';

export default IconMaterialMedicalInformationW100Filled;
