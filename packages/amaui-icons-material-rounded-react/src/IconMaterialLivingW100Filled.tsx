import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLivingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingW100Filled'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425ZM7 17.2h10q.825 0 1.012-.375.188-.375.188-.825v-4q0-.575-.363-1.05-.362-.475-.887-.6V9.5q0-.9-.65-1.55t-1.55-.65h-5.5q-.9 0-1.55.65T7.05 9.5v.85q-.525.125-.887.6Q5.8 11.425 5.8 12v4q0 .825.375 1.012.375.188.825.188Zm0-.7q-.225 0-.362-.137Q6.5 16.225 6.5 16v-4q0-.425.287-.713Q7.075 11 7.5 11t.713.287q.287.288.287.713v2h7v-2q0-.425.287-.713.288-.287.713-.287t.712.287q.288.288.288.713v4q0 .225-.137.363-.138.137-.363.137Zm2.2-3.2V12q0-.675-.437-1.138-.438-.462-1.013-.512V9.5q0-.65.425-1.075Q8.6 8 9.25 8h5.5q.65 0 1.075.425.425.425.425 1.075v.85q-.575.05-1.012.512-.438.463-.438 1.138v1.3Z"/>
    </Icon>
  );
});

IconMaterialLivingW100Filled.displayName = 'AmauiIconMaterialLivingW100Filled';

export default IconMaterialLivingW100Filled;
