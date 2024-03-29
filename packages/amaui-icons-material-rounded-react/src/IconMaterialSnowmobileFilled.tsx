import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowmobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowmobileFilled'

      short_name='Snowmobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23.675 18.35q-.375.725-1.088 1.188Q21.875 20 21 20h-5q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h2l-2-2h-4q0 1.65-1.175 2.825Q9.65 20 8 20H2q-.95 0-1.475-.625Q0 18.75 0 18q0-.5.25-.975t.8-.775l3.5-1.9-3.35-1q-.575-.175-.888-.625-.312-.45-.312-1 0-.7.525-1.238.525-.537 1.35-.437L11 11l3.7-2.7L13.25 7H12q-.425 0-.712-.287Q11 6.425 11 6t.288-.713Q11.575 5 12 5h1.65q.2 0 .35.05.15.05.3.2l6.625 6.175q.475.45.775.925.3.475.3.65 0 1.05-.962 1.787-.963.738-2.413 1.013l2.2 2.2H21q.275 0 .488-.113.212-.112.337-.312.2-.275.4-.425.2-.15.4-.15.625 0 .962.438.338.437.088.912ZM2 18h6q.825 0 1.413-.587Q10 16.825 10 16l-2.75-.825L2 18Z"/>
    </Icon>
  );
});

IconMaterialSnowmobileFilled.displayName = 'AmauiIconMaterialSnowmobileFilled';

export default IconMaterialSnowmobileFilled;
