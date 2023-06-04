import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiagnosisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisW100Filled'

      short_name='Diagnosis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 17.35h6.7v-.7h-6.7Zm0-2.5h6.7v-.7h-6.7ZM12 12.275q1.5-1.35 2.425-2.113.925-.762.925-1.962 0-.65-.45-1.1-.45-.45-1.1-.45-.725 0-1.05.337-.325.338-.75.863-.425-.525-.75-.863-.325-.337-1.05-.337-.65 0-1.1.45-.45.45-.45 1.1 0 1.2.888 1.925.887.725 2.462 2.15ZM5.3 20.7V3.3h13.4v17.4Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisW100Filled.displayName = 'AmauiIconMaterialDiagnosisW100Filled';

export default IconMaterialDiagnosisW100Filled;
