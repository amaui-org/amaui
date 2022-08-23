import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArrayRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayRoundedW100'
      short_name='DataArray'

      {...props}
    >
      <path d="M18.15 18.15V5.85H16Q15.85 5.85 15.75 5.75Q15.65 5.65 15.65 5.5Q15.65 5.35 15.75 5.25Q15.85 5.15 16 5.15H18.15Q18.425 5.15 18.638 5.362Q18.85 5.575 18.85 5.85V18.15Q18.85 18.425 18.638 18.638Q18.425 18.85 18.15 18.85H16Q15.85 18.85 15.75 18.75Q15.65 18.65 15.65 18.5Q15.65 18.35 15.75 18.25Q15.85 18.15 16 18.15ZM5.85 18.15H8Q8.15 18.15 8.25 18.25Q8.35 18.35 8.35 18.5Q8.35 18.65 8.25 18.75Q8.15 18.85 8 18.85H5.85Q5.575 18.85 5.363 18.638Q5.15 18.425 5.15 18.15V5.85Q5.15 5.575 5.363 5.362Q5.575 5.15 5.85 5.15H8Q8.15 5.15 8.25 5.25Q8.35 5.35 8.35 5.5Q8.35 5.65 8.25 5.75Q8.15 5.85 8 5.85H5.85Z"/>
    </Icon>
  );
});

IconMaterialDataArrayRoundedW100.displayName = 'AmauiIconMaterialDataArrayRoundedW100';

export default IconMaterialDataArrayRoundedW100;
