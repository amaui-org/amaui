import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScubaDivingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingW100Filled'

      short_name='ScubaDiving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14.85q-.65 0-1.125-.475T1.4 13.25q0-.65.475-1.125T3 11.65q.65 0 1.125.475T4.6 13.25q0 .65-.475 1.125T3 14.85Zm5.8-4.775q-.425.125-.837-.1-.413-.225-.538-.675-.125-.425.113-.838.237-.412.662-.537l4.175-1.25.55 2.15ZM3.875 22.1l-.575-.425 2.55-3.4.825-4.625q.05-.425.325-.738.275-.312.7-.412l9.75-2.95 1.95-4.3 2.475-2.45.525.475-2.35 2.475-1.75 4.35-4.6 3.3-6.05 1.925-1.225 3.35Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingW100Filled.displayName = 'AmauiIconMaterialScubaDivingW100Filled';

export default IconMaterialScubaDivingW100Filled;
