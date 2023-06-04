import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayW100'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.35 19.7q-.5 0-.687-.463-.188-.462.162-.812l1.65-1.65q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l1.65 1.65q.35.35.163.812-.188.463-.688.463Zm-5.55-2q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-2.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.35 0 .575-.225Q20 16.55 20 16.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8v10.4q0 .35.225.575Q4.45 17 4.8 17h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.2-6.525Z"/>
    </Icon>
  );
});

IconMaterialAirplayW100.displayName = 'AmauiIconMaterialAirplayW100';

export default IconMaterialAirplayW100;
