import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArrayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayRoundedW100Filled'
      short_name='DataArray'

      {...props}
    >
      <path d="M17.65 18.15V5.85H15.5Q15.35 5.85 15.25 5.75Q15.15 5.65 15.15 5.5Q15.15 5.35 15.25 5.25Q15.35 5.15 15.5 5.15H17.65Q17.925 5.15 18.138 5.362Q18.35 5.575 18.35 5.85V18.15Q18.35 18.425 18.138 18.638Q17.925 18.85 17.65 18.85H15.5Q15.35 18.85 15.25 18.75Q15.15 18.65 15.15 18.5Q15.15 18.35 15.25 18.25Q15.35 18.15 15.5 18.15ZM5.35 18.15H7.5Q7.65 18.15 7.75 18.25Q7.85 18.35 7.85 18.5Q7.85 18.65 7.75 18.75Q7.65 18.85 7.5 18.85H5.35Q5.075 18.85 4.863 18.638Q4.65 18.425 4.65 18.15V5.85Q4.65 5.575 4.863 5.362Q5.075 5.15 5.35 5.15H7.5Q7.65 5.15 7.75 5.25Q7.85 5.35 7.85 5.5Q7.85 5.65 7.75 5.75Q7.65 5.85 7.5 5.85H5.35Z"/>
    </Icon>
  );
});

IconMaterialDataArrayRoundedW100Filled.displayName = 'AmauiIconMaterialDataArrayRoundedW100Filled';

export default IconMaterialDataArrayRoundedW100Filled;
