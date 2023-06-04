import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffW100Filled'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-7.25-7.25H11.2q-.275 1.175-1.412 2.088Q8.65 16.35 7 16.35q-1.85 0-3.1-1.25T2.65 12q0-1.8 1.175-3.013Q5 7.775 6.65 7.65L3.4 4.4q-.1-.1-.1-.238 0-.137.1-.262t.25-.113q.15.013.25.113l16.2 16.2q.1.1.113.237.012.138-.113.263-.125.1-.262.1-.138 0-.238-.1Zm1.9-8.6q0 .15-.05.275-.05.125-.175.25l-1.2 1.225q-.075.075-.212.15-.138.075-.263.075-.2 0-.312-.037-.113-.038-.213-.113l-1.05-.8-1.275.9-3.275-3.275h6.65q.15 0 .288.05.137.05.262.175l.6.6q.125.125.175.25.05.125.05.275ZM7 13.5q.625 0 1.062-.438Q8.5 12.625 8.5 12q0-.3-.113-.575-.112-.275-.325-.487-.212-.213-.487-.325Q7.3 10.5 7 10.5q-.625 0-1.062.438Q5.5 11.375 5.5 12t.438 1.062Q6.375 13.5 7 13.5Z"/>
    </Icon>
  );
});

IconMaterialKeyOffW100Filled.displayName = 'AmauiIconMaterialKeyOffW100Filled';

export default IconMaterialKeyOffW100Filled;
