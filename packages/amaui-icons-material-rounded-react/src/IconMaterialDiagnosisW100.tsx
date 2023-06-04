import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiagnosisW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisW100'

      short_name='Diagnosis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17.35h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-2.5h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3-7q-.425-.525-.75-.863-.325-.337-1.05-.337-.65 0-1.1.45-.45.45-.45 1.1 0 1.2 1.025 2.062 1.025.863 1.825 1.588.2.2.5.2t.5-.2q.8-.7 1.825-1.575T15.35 8.2q0-.65-.45-1.1-.45-.45-1.1-.45-.725 0-1.05.337-.325.338-.75.863Zm5.2 12.85H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425ZM6.8 20h10.4q.35 0 .575-.225Q18 19.55 18 19.2V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8v14.4q0 .35.225.575Q6.45 20 6.8 20ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisW100.displayName = 'AmauiIconMaterialDiagnosisW100';

export default IconMaterialDiagnosisW100;
