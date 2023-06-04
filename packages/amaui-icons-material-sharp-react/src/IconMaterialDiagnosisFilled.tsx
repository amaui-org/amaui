import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiagnosisFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisFilled'

      short_name='Diagnosis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19h8v-2H8Zm0-3h8v-2H8Zm4-3.7q1.65-1.5 2.825-2.663Q16 8.475 16 7.2q0-.9-.65-1.55T13.8 5q-.525 0-1.012.213-.488.212-.788.587-.3-.375-.787-.587Q10.725 5 10.2 5q-.9 0-1.55.65T8 7.2q0 1.275 1.137 2.4 1.138 1.125 2.863 2.7ZM4 22V2h16v20Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisFilled.displayName = 'AmauiIconMaterialDiagnosisFilled';

export default IconMaterialDiagnosisFilled;
