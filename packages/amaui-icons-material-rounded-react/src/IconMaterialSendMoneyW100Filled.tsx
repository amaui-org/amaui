import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendMoneyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendMoneyW100Filled'

      short_name='SendMoney'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M82-480q0 74 39.5 133.5T225-260q6 3 10 8t2 11q-2 6-8.5 7.5T216-234q-88-38-125-109.5T54-480q0-65 37-136.5T216-726q6-2 12.5-.5t8.5 7.5q2 6-2 11t-10 8q-64 27-103.5 86.5T82-480Zm480 268q-112 0-190-78t-78-190q0-112 78-190t190-78q48 0 91 15t78 44q5 4 6 9.5t-4 10.5q-5 5-11 4.5t-11-4.5q-31-24-68-37.5T562-720q-100 0-170 70t-70 170q0 100 70 170t170 70q44 0 81-13.5t68-37.5q5-4 11-4.5t11 4.5q5 5 4 10.5t-6 9.5q-35 29-78 44t-91 15Zm290-254H542q-6 0-10-4t-4-10q0-6 4-10t10-4h310l-80-80q-4-4-4.5-9.5T772-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T772-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialSendMoneyW100Filled.displayName = 'AmauiIconMaterialSendMoneyW100Filled';

export default IconMaterialSendMoneyW100Filled;
