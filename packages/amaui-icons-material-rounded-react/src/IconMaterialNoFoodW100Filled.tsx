import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100Filled'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.925 18.45-7.975-8-.425-3q-.05-.275.125-.462.175-.188.45-.188h3.825V3.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8H20.5q.275 0 .425.175.15.175.125.45Zm-16.7.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm16.5.35-6.55-6.55h-9.6q-.3 0-.487-.213-.188-.212-.113-.487.375-1.2 1.963-2.1 1.587-.9 4.287-.9.35 0 .688.012.337.013.637.063v1L1.175 3.5q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100Filled.displayName = 'AmauiIconMaterialNoFoodW100Filled';

export default IconMaterialNoFoodW100Filled;
