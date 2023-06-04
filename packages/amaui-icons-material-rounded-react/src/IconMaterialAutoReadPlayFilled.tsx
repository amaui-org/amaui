import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayFilled'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.55 12.975 3.2-2.15q.45-.3.45-.825 0-.525-.45-.825l-3.2-2.15q-.5-.35-1.025-.05-.525.3-.525.9v4.25q0 .6.525.9.525.3 1.025-.05ZM3.7 20.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayFilled.displayName = 'AmauiIconMaterialAutoReadPlayFilled';

export default IconMaterialAutoReadPlayFilled;
