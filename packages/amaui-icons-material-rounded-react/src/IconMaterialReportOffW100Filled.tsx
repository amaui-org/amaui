import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100Filled'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.45 19.7q-.3 0-.575-.113-.275-.112-.5-.337l-3.6-3.6q-.225-.225-.337-.5-.113-.275-.113-.575v-5.15q0-.3.113-.575.112-.275.337-.5l1.3-1.3L2.85 3.825q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125L20.7 20.675q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3.2-3.2-1.3 1.3q-.225.225-.5.337-.275.113-.575.113Zm2.925-4.3q-.075-.075-.162-.113-.088-.037-.188-.037-.225 0-.362.15-.138.15-.138.35 0 .2.138.35.137.15.362.15.225 0 .362-.15.138-.15.138-.35 0-.1-.037-.188-.038-.087-.113-.162Zm6.55.7.425-.475q.2-.2.288-.463.087-.262.087-.537v-5.2q0-.3-.112-.575-.113-.275-.338-.5l-3.6-3.6q-.225-.225-.5-.338Q14.9 4.3 14.6 4.3H9.45q-.3 0-.575.112-.275.113-.5.338l-.4.4 3.7 3.7v-1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.7Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100Filled.displayName = 'AmauiIconMaterialReportOffW100Filled';

export default IconMaterialReportOffW100Filled;
