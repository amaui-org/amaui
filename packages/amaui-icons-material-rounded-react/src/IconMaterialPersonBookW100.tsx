import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonBookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonBookW100'

      short_name='PersonBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-272q-64 0-125 21.5T240-184q2 11 11 17.5t20 6.5h417q11 0 20-6.5t11-17.5q-52-45-113-66.5T480-272Zm0-28q69 0 129 21t111 59v-548q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v548q51-38 111-59t129-21Zm0-124q-35 0-60.5-25.5T394-510q0-35 25.5-60.5T480-596q35 0 60.5 25.5T566-510q0 35-25.5 60.5T480-424ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm208-264q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0-114Z"/>
    </Icon>
  );
});

IconMaterialPersonBookW100.displayName = 'AmauiIconMaterialPersonBookW100';

export default IconMaterialPersonBookW100;
