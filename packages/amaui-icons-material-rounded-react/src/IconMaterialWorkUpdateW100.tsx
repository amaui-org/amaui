import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateW100'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-440 440Zm240-468h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v130q-7-4-13.5-7t-14.5-6v-117q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10h277q2 8 4.5 14.5T478-172H192Zm504-43-52-52q-4-4-9.5-4.5T624-267q-5 5-5 10t5 10l75 75q5 5 11 5t11-5l75-75q4-4 4.5-9.5T796-267q-5-5-10-5t-10 5l-52 52v-130q0-6-4-10t-10-4q-6 0-10 4t-4 10v130Zm14 103q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateW100.displayName = 'AmauiIconMaterialWorkUpdateW100';

export default IconMaterialWorkUpdateW100;
