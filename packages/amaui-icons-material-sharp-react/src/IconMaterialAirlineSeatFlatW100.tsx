import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 12.7V8.3H20v4.4ZM4 15.4v-.7h16v.7Zm1.85-2.7q-.8 0-1.325-.525Q4 11.65 4 10.85q0-.8.525-1.325Q5.05 9 5.85 9q.8 0 1.325.525.525.525.525 1.325 0 .8-.525 1.325-.525.525-1.325.525Zm0-.7q.5 0 .825-.325Q7 11.35 7 10.85q0-.5-.325-.825Q6.35 9.7 5.85 9.7q-.5 0-.825.325-.325.325-.325.825 0 .5.325.825.325.325.825.325Zm4.55 0h8.9V9h-8.9Zm-4.55-1.15ZM10.4 12V9v3Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100.displayName = 'AmauiIconMaterialAirlineSeatFlatW100';

export default IconMaterialAirlineSeatFlatW100;
