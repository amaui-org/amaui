import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightW100'

      short_name='Flight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 21.025q-.175.05-.288-.038-.112-.087-.112-.262 0-.1.05-.2t.125-.15l1.825-1.325v-6.4l-8 2.35q-.2.05-.35-.05-.15-.1-.15-.325 0-.125.063-.238.062-.112.162-.162L11.15 9.35V3.5q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613v5.85l8.275 4.875q.1.05.163.162.062.113.062.238 0 .225-.15.325t-.35.05l-8-2.35V19l1.825 1.375q.075.05.125.15.05.1.05.2 0 .175-.112.262-.113.088-.288.038L12 20.3Z"/>
    </Icon>
  );
});

IconMaterialFlightW100.displayName = 'AmauiIconMaterialFlightW100';

export default IconMaterialFlightW100;
