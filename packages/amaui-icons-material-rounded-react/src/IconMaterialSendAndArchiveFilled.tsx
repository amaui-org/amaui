import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveFilled'

      short_name='SendAndArchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.5 18.1-1.45-1.45q-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35l2.125 2.125q.225.225.525.225.3 0 .525-.225l2.125-2.125q.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15L17.5 18.1v-3.6q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35ZM3 18.5v-3.725q0-.35.2-.625t.55-.35L11 12l-7.25-1.8q-.35-.075-.55-.35-.2-.275-.2-.625V5.5q0-.55.438-.838.437-.287.937-.087L17.3 10H17q-2.925 0-4.962 2.062Q10 14.125 10 17.05l-5.6 2.375q-.5.2-.95-.088Q3 19.05 3 18.5ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveFilled.displayName = 'AmauiIconMaterialSendAndArchiveFilled';

export default IconMaterialSendAndArchiveFilled;
