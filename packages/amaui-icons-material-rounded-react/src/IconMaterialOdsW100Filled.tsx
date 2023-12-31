import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdsW100Filled'

      short_name='Ods'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-376h40q18 0 31-13t13-31v-120q0-18-13-31t-31-13h-40q-18 0-31 13t-13 31v120q0 18 13 31t31 13Zm0-28q-6 0-11-5t-5-11v-120q0-6 5-11t11-5h40q6 0 11 5t5 11v120q0 6-5 11t-11 5h-40Zm171 28h69q18 0 31-13t13-31v-120q0-18-13-31t-31-13h-69q-6 0-10.5 4.5T416-569v178q0 6 4.5 10.5T431-376Zm13-28v-152h56q6 0 11 5t5 11v120q0 6-5 11t-11 5h-56Zm256 28q18 0 31-13t13-31v-30q0-18-13-31t-31-13h-40q-6 0-11-5t-5-11v-30q0-6 5-11t11-5h70q6 0 10-4t4-10q0-6-4-10t-10-4h-70q-18 0-31 13t-13 31v30q0 18 13 31t31 13h40q6 0 11 5t5 11v30q0 6-5 11t-11 5h-70q-6 0-10 4t-4 10q0 6 4 10t10 4h70ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialOdsW100Filled.displayName = 'AmauiIconMaterialOdsW100Filled';

export default IconMaterialOdsW100Filled;
