import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseW100'

      short_name='Enterprise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-366q23 0 38.5-15.5T534-420q0-23-15.5-38.5T480-474q-23 0-38.5 15.5T426-420q0 23 15.5 38.5T480-366ZM192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-376q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v376q0 12 10 22t22 10Zm208-468h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseW100.displayName = 'AmauiIconMaterialEnterpriseW100';

export default IconMaterialEnterpriseW100;
